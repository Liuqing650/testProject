import React from 'react';
import * as d3 from 'd3';
import { Slider, InputNumber, Row, Col, Radio } from 'antd';
import './chart.less';
import treeData from '../../../mock/treeData.json';

let tree;
let svg;
let rectNodeHeight = 40; // Y
let rectNodeColor = "#65A1EA"; // A
let rectNodeNullIdColor = '#F0A23A'; // L
let strokeColor = '#979797'; // P
let borderStockeColor = '#D6D6D6'; // N
let textColor = '#333333'; // M
let subTextColor = '#65A1EA'; // C
let textY = 7; // j
let strokeWidth = 1; // w 线的宽度
let borderStockeWidth = 1; // T 线的宽度
let container$;
let topGroupZ; // Z
let centerGroup;
let bottomGroupQ; // Q
let zoomJ;
let nodeFontSize = 17; // q
let textFontSize = 14; // O
let subTextFontSize = 12; // E
let textPadding = 10; // S
let scaleK = 1; // K
let rootData = {};
let topData = {};
let bottomData = {};
let D = 4; // D ?
let I = 20; // I ?
let R = 7; // R ?
let transitionTime = 500;// H 间隔时间
let nodeSizeX = 150;
let nodeSizeY = 200; // V 节点高度
let rectRx = 2; // X
let rectWidth = 132; // z 矩形宽度
let rectHeight = 64; // F 矩形高度
let chartDom = '#divTreeChart'; // U
let divWidth = 1000; // re
let ie = 0;
let topNodeHeight = 0; // ae
let bottomNodeHeight = 0; // oe
let isFullScreen = false; //ue 这个是全屏事件
let se = 100;
let centerWidth = 0; // le
let xe = 0; // ce transform
let ye = 0; // fe transform
let leftPosition = 0; // de 获取节点的左边宽度,eg: -(rectWidth / 2)
let he = 0; // he node 的id为null 时进行自增填充(++he)
let nodeClick = null; // 节点点击事件 pe
let nodeToggle = null; // 节点切换事件 ve

class Tree extends React.Component {

  state = {
    separationIndex: 1,
    action: 'horizontal'
  };
  componentDidMount() {
    this.renderTree();
  }

  componentDidUpdate(newProps) {
    this.resetSvg();
    this.renderTree();
    if (this.props.activeMenu !== newProps.activeMenu) {
      this.changeChart(this.props.activeMenu);
    }
  }

  change = (data) => {
    this.setState({
      data
    });
  };

  changeChart(activeMenu) {
    let isThisChart = false;
    let data = [];
    this.props.menus.map((menu) => {
      if (menu.title === title) {
        data = menu.children;
        data.map((item, index) => {
          if (item.id === activeMenu.eventKey) {
            isThisChart = true;
            this.resetSvg();
            activeIndex = index;
            switch (index) {
              case 0: this.renderTree();
                break;
              default: this.renderTree();
            }
          }
        })
      }
    })
    if (!isThisChart) {
      this.resetSvg();
    }
  }

  /**
   *
   * @param {{}} data 原始数据: {treeData}
   * @param {[]} keys 隐射键和值: ["pTrees", "cTrees"]
   */
  modifyData = (data, keys) => {
    var obj = {};
    // a(t, ["pTrees", "cTrees"])
    for (var key in data) {
      keys.indexOf(key) >= 0 || Object.prototype.hasOwnProperty.call(data, key) && (obj[key] = data[key])
    };
    return obj;
  }

  renderTree = () => {
    // 全局变量
    const arrowP = '#979797';
    const arrowCompanyA = '#65A1EA';
    const arrowPersonL = '#F0A23A';
    const conH = 500; // 画布高度

    console.log('treeData----->', this.props.treeData);
    console.log('d3----->', d3);
    const createDom = () => {
      svg = d3.select(chartDom)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '600px')
        .attr('id', 'structureChart')
        .style('transition', "height " + transitionTime + "ms ease-in-out")
        .classed("new-network-rect", true)
      // 添加svg 标记
      svg.append("defs").append("marker")
        .attr("id", "arrow").attr("viewBox", "0 0 12 12")
        .attr("markerUnits", "strokeWidth")
        .attr("refX", 11)
        .attr("refY", 6)
        .attr("markerWidth", 24)
        .attr("markerHeight", 24)
        .attr("orient", "auto").append("path")
        .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr("fill", arrowP);

      svg.append("defs").append("marker")
        .attr("id", "arrowCompany")
        .attr("viewBox", "0 0 12 12")
        .attr("markerUnits", "strokeWidth")
        .attr("refX", 11)
        .attr("refY", 6)
        .attr("markerWidth", 24)
        .attr("markerHeight", 24)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr("fill", arrowCompanyA);

      svg.append("defs").append("marker")
        .attr("id", "arrowPerson")
        .attr("viewBox", "0 0 12 12")
        .attr("markerUnits", "strokeWidth")
        .attr("refX", 11)
        .attr("refY", 6)
        .attr("markerWidth", 24)
        .attr("markerHeight", 24)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr("fill", arrowPersonL);

      // 画图
      container$ = svg.append('g')
        .attr("id", "structureChartContainer");

      // 上边的数据
      topGroupZ = container$.append('g')
        .classed("topG", true).style("transition", "transform " + conH + "ms ease-in-out");
      topGroupZ.append('g').classed("topGLinks", true);
      topGroupZ.append('g').classed("topGNodes", true);
      // 下边的数据
      bottomGroupQ = container$.append('g').classed("bottomG", true).style("transition", "transform " + conH + "ms ease-in-out");
      bottomGroupQ.append('g').classed("bottomGLinks", true);
      bottomGroupQ.append('g').classed("bottomGNodes", true);
      // 内容数据
      container$.append('g').classed("centerG", true).style("transition", "transform " + conH + "ms ease-in-out");

      // 执行缩放函数
      zoomTree();
      // 执行图像创建函数
      createChart();
    };
    // 创建节点
    // 创建图像
    /**
     * nodeData: {
          x0: a[0].x,
          y0: a[0].y,
          x: a[0].x,
          y: a[0].y
        }
     */
    const createChart = (nodeData) => {
      // 创建线条
      /**
       * _dom node节点的dom
       * layout 节点布局: topLayout/bottomLayout
       * index 系数
       * _nodeData 节点数据
       */
      const createLine = (_dom, layout, index, _nodeData) => { // e, t, n, r
        const linkVertical = d3.linkVertical()
          .x(function (even) { return even.x; })
          .y(function (even) { return even.y; });
        const link = _dom.selectAll('structure-link') // link ==> a
          .data(layout.links(), (even) => { return even.target.data.id; });
        link.enter()
          .append("path")
          .attr("class", function (even) {
            return "structure-link link-" + even.target.data.identifier + " " + (even.target.data.eid && "null" !== even.target.data.eid ? "company" : "person")
          })
          .style("fill", "none").attr("d", function () {
            const temp = {
              x: _nodeData.x0,
              y: _nodeData.y0
            };
            return linkVertical({
              source: temp,
              target: temp
            })
          })
          .style("stroke", strokeColor)
          .style("stroke-width", strokeWidth)
          .transition()
          .ease(d3.easeQuad)
          .duration(transitionTime)
          .attr("d", function (even) {
            // rectNodeHeight ==> Y
            // index ===> n
            // rectHeight ==> F
            // D ==> D
            // I ==> I
            // R ==> R
            const temp = {
              source: {
                x: even.source.x,
                y: even.source.y + index * (0 === even.source.depth ? rectNodeHeight / 2 : 1 === index ? rectHeight / 2 + D + R : rectHeight / 2 + R)
              },
              target: {
                x: even.target.x,
                y: even.target.y - index * ((1 === index ? rectHeight / 2 : rectHeight / 2 + D) + I)
              }
            };
            return linkVertical(temp);
          });
        link.transition()
          .duration(transitionTime)
          .ease(d3.easeQuad)
          .attr("d", function (even) {
            // rectNodeHeight ==> Y
            // index ===> n
            // rectHeight ==> F
            // D ==> D
            // I ==> I
            // R ==> R
            const temp = {
              source: {
                x: even.source.x,
                y: even.source.y + index * (0 === even.source.depth ? rectNodeHeight / 2 : 1 === index ? rectHeight / 2 + D + R : rectHeight / 2 + R)
              },
              target: {
                x: even.target.x,
                y: even.target.y - index * ((1 === index ? rectHeight / 2 : rectHeight / 2 + D) + I)
              }
            };
            return linkVertical(temp);
          });
        link.exit()
          .transition()
          .duration(transitionTime)
          .ease(d3.easeQuad)
          .attr("d", function () {
            const temp = {
              x: _nodeData.x, // _nodeData ==> r
              y: _nodeData.y + index * rectHeight / 2
            };
            return linkVertical({
              source: temp,
              target: temp
            })
          })
          .remove()
      };

      // 创建节点
      /**
       * _dom node节点的dom
       * layout 节点布局: topTreeLayout/bottomTreeLayout
       * index 系数
       * _nodeData 节点数据
       */
      const createNode = (_dom, layout, index, _nodeData) => { // e, t, n, a
        // node ===> o
        // _dom ==> e
        // nodes ==> u
        const node = _dom.selectAll("structure-node").data(layout, function (even) {
          if (!even.data.id) {
            even.data.id = ++he
          }
          return even.data.id;
        });
        const nodes = node.enter()
          .filter(function (even) { return 0 !== even.depth; })
          .append('g').attr('class', function (even) {
            return "structure-node node" + even.data.identifier
          })
          .attr("transform", function (even) {
            return "translate(" + even.x + ", " + even.y + ")"
            // return "translate(" + _nodeData.x0 + ", " + _nodeData.y0 + ")"
          })
          .style("cursor", "default").on("mouseover", function (even) {
            // identifier ==> t
            // linkClassName ==> n
            const identifier = even.data.identifier;
            let linkClassName = ".link-" + identifier + ",.border-" + identifier;
            const createCss = (even) => {
              // temp ==> r
              const temp = even.data.identifier;
              linkClassName += ",.link-" + temp + ",.border-" + temp;
              if (identifier.parent) {
                createCss(identifier.parent);
              }
            };
            // 获取线条
            createCss(even);
            // activeNode ==> r
            const activeNode = d3.selectAll(linkClassName).classed('active', true);
            activeNode.filter(".mark.company").attr("marker-end", "url(#arrowCompany)"),
              activeNode.filter(".mark.person").attr("marker-end", "url(#arrowPerson)"),
              even.data._selector = linkClassName
          }).on("mouseleave", function (even) {
            d3.selectAll(even.data._selector)
              .classed('active', false)
              .filter(".mark")
              .attr("marker-end", "url(#arrow)")
          });

        // rectHeight ==> F
        // rectWidth ==> z
        // rectRx ==> X
        // borderStockeColor ==> N
        // borderStockeWidth ==> T
        // D ==> D
        // rectNodeColor ==> A
        // rectNodeNullIdColor ==> L
        // transitionTime ==> H
        nodes.append("rect")
          .attr("x", -rectWidth / 2)
          .attr("y", -rectHeight / 2)
          .attr("width", rectWidth)
          .attr("height", rectHeight)
          .attr("rx", rectRx)
          .attr("ry", rectRx)
          .style("stroke", borderStockeColor)
          .style("stroke-width", borderStockeWidth)
          .style("fill", "#ffffff")
          .attr("class", function (even) {
            return "structure-border border-" + even.data.identifier + " " + (even.data.eid && "null" !== even.data.eid ? "company" : "person")
          });
        nodes.append("rect")
          .attr("x", -rectWidth / 2 - borderStockeWidth / 2)
          .attr("y", rectHeight / 2 - borderStockeWidth / 2)
          .attr("width", rectWidth + borderStockeWidth)
          .attr("height", D)
          .style("fill", function (even) {
            return even.data.eid && "null" !== even.data.eid ? rectNodeColor : rectNodeNullIdColor
          });

        // 执行方法
        // 追加文字
        createText(nodes, index); // r(u, n)
        filterNode(nodes, index); // i(u, n)

        const structureNode = _dom.selectAll("structure-node");
        structureNode.transition()
          .duration(transitionTime)
          .ease(d3.easeQuad)
          .attr("transform", function (even) {
            return "translate(" + even.x + ", " + even.y + ")"
          });
        structureNode.selectAll("text")
          .transition()
          .duration(transitionTime)
          .ease(d3.easeQuad)
          .style("fill-opacity", 1);
        const nodeExit = node.exit(); // --> l
        nodeExit.transition()
          .duration(transitionTime)
          .ease(d3.easeQuad)
          .attr("transform", function () {
            return "translate(" + _nodeData.x + "," + _nodeData.y + ")"
          })
          .remove();
        nodeExit.select("circle").attr("r", 1);
        nodeExit.selectAll("text")
          .transition()
          .duration(transitionTime)
          .ease(d3.easeQuad)
          .style("fill-opacity", 1)
        layout.forEach(function (even) {
          even.data.x0 = even.x;
          even.data.y0 = even.y
        })
      };

      // 追加文字
      const createText = (nodes, index) => { // e, t
        nodes.append("text").text(function (even) {
          // name ==> t
          // rectHeight ==> F
          // caclulateTextLength ==> n
          // textFontSize ==> O
          // textPadding ==> S
          // totalPadding ==> r
          // rectWidth ==> z
          // textWidth ==> i
          // textY ==> j
          // textColor ==> M
          let name = even.data.name;
          const caclulateTextLength = caclulateNodeContentLength(name, textFontSize);
          const totalPadding = 2 * textPadding;
          if (caclulateTextLength + totalPadding > rectWidth) {
            const textWidth = Math.ceil((rectWidth - totalPadding) / (caclulateTextLength / name.length));
            name = even.data.name.substring(0, textWidth);
            even.data._subName = even.data.name.substring(textWidth)
          }
          return name;
        })
          .attr("x", textPadding - rectWidth / 2)
          .attr("y", textY - rectHeight / 2)
          .attr("dy", textFontSize)
          .style("fill-opacity", 1)
          .style("font-size", textFontSize + "px")
          .attr("fill", textColor)
          .attr("font-weight", 500)
          .style("cursor", function (even) {
            if (even.data.eid && "null" !== even.data.eid)
              return "pointer"
          })
          .on("mouseover", function (even) {
            if (even.data.eid && "null" !== even.data.eid) {
              d3.select(this).attr("font-weight", 600);
            }
          })
          .on("mouseleave", function (even) {
            if (even.data.eid && "null" !== even.data.eid) {
              d3.select(this).attr("font-weight", 500);
            }
          })
          .on("click", nodeClick).filter(function (even) {
            return !!even.data._subName
          })
          .append("tspan") // 绘制SVG多行文本
          .attr("x", textPadding - rectWidth / 2)
          .attr("dy", "1.35em")
          .attr("fill", textColor)
          .text(function (even) {
            let name = even.data._subName;
            const caclulateTextLength = caclulateNodeContentLength(name, textFontSize);
            const totalPadding = 2 * textPadding;
            if (caclulateTextLength + totalPadding > rectWidth) {
              name = name.substring(0, Math.ceil((rectWidth - totalPadding) / (caclulateTextLength / name.length)) - 2) + "..."
            }
            return name;
          });
        nodes.filter(function (even) { return even.data.amount })
          .append("text")
          .text(function (even) {
            let amount = parseFloat(even.data.amount) ? parseFloat(even.data.amount).toFixed(0) : "***";
            if (even.data.amount) {
              const shares = 0;
              if (-1 === shares) {
                amount = "认缴金额：" + amount + "万元";
              } else {
                amount = "持股数：" + amount + "万股";
              }
            }
            const caclulateTextLength = caclulateNodeContentLength(amount, subTextFontSize);
            const totalPadding = 2 * textPadding;
            if (caclulateTextLength + totalPadding > rectWidth) {
              amount = amount.substring(0, Math.ceil((rectWidth - totalPadding) / (caclulateTextLength / amount.length) - 1)) + "...";
            }
            return amount;
          })
          .attr("x", textPadding - rectWidth / 2)
          .attr("y", rectHeight / 2 - textY)
          .style("fill-opacity", 1)
          .style("font-size", subTextFontSize + "px")
          .attr("fill", textColor);

        const percent = nodes.filter(function (even) {
          return even.data.percent;
        });

        // nodes ==> e
        // amount ==> t
        // shares ===> n
        // ----------------
        // rectHeight ==> F
        // caclulateTextLength ==> n
        // textFontSize ==> O
        // subTextFontSize ==> E/k
        // textPadding ==> S
        // totalPadding ==> r
        // subTextColor ==> C
        // rectWidth ==> z
        // textWidth ==> i
        // strokeColor ==> P
        // strokeWidth ===> w
        // I ==> I
        // textColor ==> M
        percent.filter(function (even) { return !even.data.hidePercent; })
          .append("text").text(function (even) {
            return (100 * even.data.percent).toFixed(2) + "%"
          })
          .style("font-size", subTextFontSize + "px")
          .attr("fill", subTextColor)
          .attr("x", 0)
          .attr("y", function () {
            return 1 === index ? -rectHeight / 2 - 5 : rectHeight / 2 + D + 5
          })
          .attr("dx", 10)
          .attr("dy", 1 === index ? "" : "1em");

        // 股票 shares ---> r
        const shares = percent.append("text")
          .style("font-size", subTextFontSize + "px")
          .attr("fill", subTextColor)
          .attr("y", function () {
            return 1 === index ? -rectHeight / 2 - 5 : rectHeight / 2 + D + 5
          })
          .attr("dy", 1 === index ? "" : "1em");

        shares.filter(function (even) { return !even.data.hidePercent; })
          .text("持股")
          .attr("x", -35);

        shares.filter(function (even) { return even.data.hidePercent; })
          .text("查看股比")
          .attr("x", -58)
          .style("cursor", "pointer")
          .on("click", function (even) {
            if (nodeToggle) {
              nodeToggle(even, "percent");
            }
          })
        nodes.append("g")
          .attr("transform", "translate(0, " + (1 === index ? -rectHeight / 2 - I : rectHeight / 2 + D) + ")")
          .append("path")
          .attr("d", function () {
            return d3.line()([
              [0, 0],
              [0, I]
            ])
          })
          .attr("class", function (even) {
            return "structure-link mark link-" + even.data.identifier + " " + (even.data.eid && "null" !== even.data.eid ? "company" : "person")
          })
          .style("stroke", strokeColor).style("stroke-width", strokeWidth).attr("marker-end", "url(#arrow)")
      };

      // 过滤节点数据
      const filterNode = (nodes, index) => { // e, t
        // rectHeight ==> F
        // R ==> R
        // D ==> D
        // rectNodeColor ==> A
        // handleNodes ===> n
        const handleNodes = nodes.filter(function (even) {
          return even.data.items && even.data.items.length || even.data.hideNodes;
        })
          .append("g")
          .style("cursor", "pointer")
          .classed("circle", true)
          .on("click", function (even) {
            if (nodeToggle) {
              nodeToggle(even, 'circle');
            }
            if (!even.data.hideNodes) {
              const tempNodeData = {
                identifier: even.data.identifier,
                x0: even.data.x0,
                y0: even.data.y0
              };
              hideNode(even);
              createChart(tempNodeData);
            }
          })
          .attr("transform",
            "translate(0, " + (index * rectHeight / 2 + index * (R + (1 === index ? D : 0))) + ")");
        handleNodes.append("circle").attr("r", R).style("stroke", rectNodeColor).style("stroke-width", "1px").style("fill", rectNodeColor).classed("node-twinkle", !0),
          handleNodes.append("line").attr("x1", -4).attr("y1", 0).attr("x2", 4).attr("y2", 0).style("stroke", "#ffffff").style("stroke-width", "1px"),
          handleNodes.append("line").attr("class", "vertical-line").attr("x1", 0).attr("y1", -4).attr("x2", 0).attr("y2", 4).style("stroke", "#ffffff").style("stroke-width", "1px"),
          container$.selectAll(".vertical-line").attr("visibility", function (even) {
            return even.data.children ? "hidden" : ""
          })
      };

      leftPosition = 0; // de
      const topLayout = d3.hierarchy(topData); // a d3 ==> v
      const bottomLayout = d3.hierarchy(bottomData);// o
      const topDepth = caclulateDepth(topLayout.descendants()); // s
      const topMaxDepth = topDepth.maxDepth; // l
      const bottomDepth = caclulateDepth(bottomLayout.descendants()); // h
      const bottomMaxDepth = bottomDepth.maxDepth; // p
      centerWidth = divWidth / 2; // le
      topNodeHeight = nodeSizeY * topMaxDepth; // ae = V * l
      bottomNodeHeight = nodeSizeY * bottomMaxDepth; // oe = V * p
      ie = topNodeHeight + bottomNodeHeight + rectHeight + 2 * se;
      svg.attr("height", ie);
      container$.style("transform-origin", "0 center 0")
        .attr("transform", "translate(" + (centerWidth + xe) + ", " + ye + ")scale(" + scaleK + ")");

      // 创建顶部树
      /**
       * _nodeHeight 节点高度
       * _nodeData 节点数据的 data信息
       */
      const createTopTree = (_nodeHeight, _nodeData) => { // e, r
        d3.tree().nodeSize([nodeSizeX, nodeSizeY])(topLayout); // topLayout -> a
        topGroupZ.attr("transform", "translate(0, " + (rectHeight / 2 + se) + ")"); // rectHeight ==> F
        const topTreeLayout = topLayout.descendants(); // i
        let tempNodeData = _nodeData || {
          x0: topTreeLayout[0].x,
          y0: _nodeHeight - topTreeLayout[0].y,
          x: topTreeLayout[0].x,
          y: _nodeHeight - topTreeLayout[0].y
        };
        topTreeLayout.map((item) => { // item ==> t
          item.y = _nodeHeight - item.y;
          if (item.data.identifier === tempNodeData.identifier) {
            tempNodeData.x = item.x;
            tempNodeData.y = item.y;
          }
          if (item.x < 0 && item.x < leftPosition) {
            leftPosition = item.x;
          }
        });

        // 创建线条
        createLine(topGroupZ.select('.topGLinks'), topLayout, -1, tempNodeData); // t()
        // 创建节点
        createNode(topGroupZ.select(".topGNodes"), topTreeLayout, -1, tempNodeData); // n()
      };
      // 创建底部树
      /**
       * _ 未知
       * _nodeHeight 节点高度
       * _nodeData 节点数据的 data信息
       */
      const createBottomTree = (_, _nodeHeight, _nodeData) => { // e, r, i
        d3.tree().nodeSize([nodeSizeX, nodeSizeY])(bottomLayout); // bottomLayout -> o
        bottomGroupQ.attr("transform", "translate(0, " + (_nodeHeight + rectHeight / 2 + se) + ")");// rectHeight ==> F
        const bottomTreeLayout = bottomLayout.descendants(); // a
        let tempNodeData = _nodeData || {
          x0: bottomTreeLayout[0].x,
          y0: bottomTreeLayout[0].y,
          x: bottomTreeLayout[0].x,
          y: bottomTreeLayout[0].y
        };
        bottomTreeLayout.map((item) => { // item ==> t
          if (item.data.identifier === tempNodeData.identifier) {
            tempNodeData.x = item.x;
            tempNodeData.y = item.y;
          }
          if (item.x < 0 && item.x < leftPosition) {
            leftPosition = item.x;
          }
        });
        // 创建线条
        createLine(bottomGroupQ.select('.bottomGLinks'), bottomLayout, 1, tempNodeData); // t()
        // 创建节点
        createNode(bottomGroupQ.select(".bottomGNodes"), bottomTreeLayout, 1, tempNodeData); // n()
      };
      // 创建根数据
      const createRootTree = () => {
        // rootTreeLayout ===> e;
        const rootTreeLayout = d3.hierarchy(rootData); // rootData ==> ee
        const centerDom = container$.select(".centerG")
          .attr("transform", "translate(0, " + (topNodeHeight + rectHeight / 2 + se) + ")");
        const name = rootData.name;
        const cacluRectWidth = caclulateNodeContentLength(name, nodeFontSize);
        const rectNodeWidth = cacluRectWidth + 30; // i
        if (- rectNodeWidth / 2 < leftPosition - rectWidth / 2) { // rectWidth=>z
          leftPosition = (rectWidth - rectNodeWidth) / 2; // leftPosition=>de
        }
        // rect ===> a;
        const rect = centerDom.selectAll("rect").data(rootTreeLayout.descendants()).enter();
        rect.append("rect")
          .attr("x", -rectNodeWidth / 2)
          .attr("y", -rectNodeHeight / 2) // rectNodeHeight ==> Y
          .attr("width", rectNodeWidth)
          .attr("height", rectNodeHeight)
          .style("fill", rectNodeColor) // rectNodeColor ==> A
          .attr("rx", "3px")
          .attr("ry", "3px")
        rect.append("text")
          .attr("x", 0)
          .attr("text-anchor", "middle")
          .attr("dy", "0.35em")
          .text(function (rootTreeLayout) {
            return rootTreeLayout.data.name
          })
          .style("font-size", nodeFontSize + "px") // nodeFontSize ==> q
          .style("cursor", "pointer")
          .attr("fill", "#ffffff")
          .on("click", nodeClick)
        console.log('leftPosition----->', leftPosition);
      };
      const setUp = () => {
        // 执行创建根数据
        createRootTree();
        // 执行创建底部树
        createBottomTree(0, bottomNodeHeight, nodeData);
        // 执行创建顶部树
        createTopTree(topNodeHeight, nodeData);
      };
      setUp();
    };

    // 缩放图形
    const zoomTree = () => {
      zoomJ = d3.zoom()
        .scaleExtent([0.5, 2])
        .on("zoom", function () {
          scaleK = d3.event.transform.k;
          container$.attr("transform", "translate(" + (centerWidth + xe) + "," + ye + ")");
          container$.attr("scale", scaleK);
        });
      svg.call(d3.drag().on('drag', () => {
        xe += d3.event.dx;
        ye += d3.event.dy;
        container$.attr("transform", "translate(" + (centerWidth + xe) + "," + ye + ")");
        container$.attr("scale", scaleK);
      }))
    };

    // 缩放
    const zoomChart = (zoom) => {
      const zoomScale = (scaleK + zoom).toFixed(1);
      if (zoomScale > 0.5 && zoomScale <= 2) {
        scaleK = zoomScale;
        zoomJ.scaleTo(svg, scaleK);
      }
    };

    const scaleChart = (zoom) => {
      zoomChart(0.1 + zoom);
    };

    // 计算节点深度
    const caclulateDepth = (descendants) => {
      let max = 0;
      let next = true;
      const loop = (data) => {
        let arr = data[Symbol.iterator]();
        for (let temp; !(next = (temp = arr.next()).done); next = true) {
          const val = temp.value;
          const depth = val.depth;
          depth > max && (max = depth);
          if (val.children) {
            loop(val.children);
          }
        }
      };
      loop(descendants);
      return {
        maxDepth: max
      }
    }

    // 计算节点内容长度 ==> f()
    const caclulateNodeContentLength = (name, fontSize = 14) => {
      let length = 0; // n
      if (name && name.length > 0) {
        let numLen = 0;
        let symbolLen = 0;
        let lowerLen = 0;
        let capitalsLen = 0;
        const num = name.match(/[0-9]/g);
        const symbol = name.match(/[.:,\s()]/g);
        const lower = name.match(/[a-z]/g);
        const capitals = name.match(/[A-Z]/g);
        if (num) {
          numLen = num.length;
          length += 8.2 * numLen;
        }
        if (symbol) {
          symbolLen = symbol.length;
          length += 3.2 * symbolLen;
        }
        if (lower) {
          lowerLen = lower.length;
          length += 7.54 * lowerLen;
        }
        if (capitals) {
          capitalsLen = capitals.length;
          length += 9.35 * capitalsLen;
        }
        length += (name.length - numLen - symbolLen - lowerLen - capitalsLen) * fontSize
      }
      return length
    };

    // 隐藏子元素
    function hideNode(even) {
      if (even.data.children) {
        even.data.children = null;
      } else {
        even.data.children = even.data.items;
      }
    }

    // 获取子元素
    const modifyChildData = Object.assign || function (even) {
      for (let index = 1; index < arguments.length; index++) {
        const keys = arguments[index];
        for (var key in keys)
          Object.prototype.hasOwnProperty.call(keys, key) && (even[key] = keys[key])
      }
      return even;
    }

    /**
     * dom: 'divNewNetwork' 字符串
     * data: treeData 数据
     * nodeClick: nodeClickEvent 节点点击事件
     * nodeEvent: nodeToggleEvent 节点切换事件
     * ?: isFullScreen 是否全屏
     */
    const initData = (dom, data, _nodeClick, _nodeToggle) => {
      const top = this.props.treeData.p_trees;
      const bottom = this.props.treeData.c_trees;
      const handleData = this.modifyData(this.props.treeData, ["p_trees", "c_trees"]);
      scaleK = 1;
      // chartDom = `#${dom}`;
      xe = 0;
      ye = 0;
      rootData = handleData;
      topData = modifyChildData({}, rootData, { children: top });
      bottomData = modifyChildData({}, rootData, { children: bottom });
      nodeClick = _nodeClick;
      nodeToggle = _nodeToggle;
      isFullScreen = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; // ue
      // 初始化dom
      createDom();
    };
    // 初始化
    initData();
  };


  resetSvg() { // 重置svg
    d3.select('#divTreeChart').selectAll("*").remove();
  }
  render() {
    const divStyle = {
      border: '1px solid #ccc',
      width: divWidth,
      margin: '0 auto'
    }
    return (
      <div>
        <div id="divTreeChart" ref="treeChart" style={divStyle}></div>
      </div>
    );
  }
};
export default Tree;
