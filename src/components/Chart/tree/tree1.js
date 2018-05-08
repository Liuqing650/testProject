import React from 'react';
import * as d3 from 'd3';
import { Slider, InputNumber, Row, Col, Radio } from 'antd';
import './tree1.less';
import treeData from '../../../mock/treeData.json';

let tree;
let svg;
let rectNodeHeight = 40; // Y
let rectNodeColor = "#65A1EA"; // A
let container$;
let topGroupZ; // Z
let centerGroup;
let bottomGroupQ; // Q
let zoomJ;
let nodeFontSize = 17; // q
let scaleK = 1; // K
let rootData = {};
let topData = {};
let bottomData = {};
let transitionTime = 500;
let nodeSizeX = 150;
let nodeSizeY = 200; // V 节点高度
let rectWidth = 132; // z 矩形宽度
let rectHeight = 64; // F 矩形高度
let chartDom = '#divTreeChart'; // U
let divWidth = 800; // re
let ie = 0;
let topNodeHeight = 0; // ae
let bottomNodeHeight = 0; // oe
let isFullScreen = false; //ue 这个是全屏事件
let se = 100;
let centerWidth = 0; // le
let xe = 0; // ce transform
let ye = 0; // fe transform
let leftPosition = 0; // de 获取节点的左边宽度,eg: -(rectWidth / 2)
let he = 0;
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

    const zoom = d3.zoom(); // 缩放事件
    const drag = d3.drag(); // 拖拽事件

    console.log('treeData----->', this.props.treeData);
    console.log('d3----->', d3);
    const createDom = () => {
      svg = d3.select(chartDom)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '600px')
        .attr('id', 'structureChart')
        .style('transition', "height " + transitionTime + "ms ease-in-out")
        .attr('class', 'new-network-rect')
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
        .attr("class", "topG").style("transition", "transform " + conH + "ms ease-in-out");
      topGroupZ.append('g').attr("class", "topGLinks");
      topGroupZ.append('g').attr("class", "topGNodes");
      // 下边的数据
      bottomGroupQ = container$.append('g').attr("class", "bottomG").style("transition", "transform " + conH + "ms ease-in-out");
      bottomGroupQ.append('g').attr("class", "bottomGLinks");
      bottomGroupQ.append('g').attr("class", "bottomGNodes");
      // 内容数据
      container$.append('g').attr("class", "centerG").style("transition", "transform " + conH + "ms ease-in-out");

      // 执行缩放函数
      zoomTree();
      // 执行图像创建函数
      createChart();
    };
    // 创建节点
    // 创建图像
    /**
     * position: {
          x0: a[0].x,
          y0: a[0].y,
          x: a[0].x,
          y: a[0].y
        }
     */
    const createChart = (nodeData) => {
      // 创建线条
      const createLine = (data, nodes, index, root) => {

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
        _nodeData = _nodeData || {
          x0: topTreeLayout[0].x,
          y0: _nodeHeight - topTreeLayout[0].y,
          x: topTreeLayout[0].x,
          y: _nodeHeight - topTreeLayout[0].y
        };
        topTreeLayout.map((item) => { // item ==> t
          item.y = _nodeHeight - item.y;
          if (item.data.identifier === _nodeData.identifier) {
            _nodeData.x = item.x;
            _nodeData.y = item.y;
          }
          if (item.x < 0 && item.x < leftPosition) {
            leftPosition = item.x;
          }
        });
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
        _nodeData = _nodeData || {
          x0: bottomTreeLayout[0].x,
          y0: bottomTreeLayout[0].y,
          x: bottomTreeLayout[0].x,
          y: bottomTreeLayout[0].y
        };
        bottomTreeLayout.map((item) => { // item ==> t
          if (item.data.identifier === _nodeData.identifier) {
            _nodeData.x = item.x;
            _nodeData.y = item.y;
          }
          if (item.x < 0 && item.x < leftPosition) {
            leftPosition = item.x;
          }
        });
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
        // 执行创建顶部树
        createTopTree(topNodeHeight, nodeData);
        // 执行创建底部树
        createBottomTree(0, bottomNodeHeight, nodeData);
        // 执行创建根数据
        createRootTree();
      };
      setUp();
    };

    // 开始绘制图像
    const zoomTree = () => {
      zoomJ = d3.zoom().scaleExtent([0.5, 2]).on("zoom", function () {
        scaleK = d3.event.transform.k, container$.attr("transform", "translate(" + (le + xe) + "," + ye + ")scale(" + scaleK + ")")
      });
      svg.call(drag.on("drag", function () {
        xe += d3.event.dx;
        ye += d3.event.dy;
        container$.attr("transform", "translate(" + (le + xe) + "," + ye + ")scale(" + scaleK + ")");
      }))
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

    // 计算节点内容长度
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
      bottomData = modifyChildData({}, rootData, { children: bottom});
      nodeClick = _nodeClick;
      nodeToggle = _nodeToggle;
      isFullScreen = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; // ue
      // 初始化dom
      createDom();
    };
    // 初始化
    initData();

  // ---------------------------------------------------------
    const margin = { top: 50, right: 90, bottom: 60, left: 90 },
      widthTem = 660 - margin.left - margin.right,
      heightTem = 500 - margin.top - margin.bottom;

    const vscale = {
      x: 2,
      y: 1
    };
    const orientations = {
      "horizontal": { // 水平布局
        size: [widthTem, heightTem],
        nodeSize: [widthTem / 2, heightTem / 2],
        svgSize: {
          width: widthTem + margin.left + margin.right,
          height: heightTem + margin.top + margin.bottom
        },
        gPosition: "translate(" + margin.left + "," + margin.top + ")",
        linkLayout: (d) => {
          return "M" + d.y + "," + d.x
            + "C" + (d.y + d.parent.y) / 2 + "," + d.x
            + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
        },
        linkLayoutTarget: (d) => {
          return "M" + d.source.y + "," + d.source.x
            + "C" + (d.source.y + d.target.y) / 2 + "," + d.source.x
            + " " + (d.source.y + d.target.y) / 2 + "," + d.target.x
            + " " + d.target.y + "," + d.target.x;
        },
        nodeLayout: (d) => {
          return "translate(" + d.y + "," + d.x + ")";
        }
      },
      "vertical": { // 垂直布局
        size: [widthTem, heightTem],
        nodeSize: [widthTem / 2, heightTem / 2],
        svgSize: {
          width: widthTem + margin.left + margin.right,
          height: heightTem + margin.top + margin.bottom
        },
        gPosition: "translate(" + (-margin.left - 30) + "," + margin.top + ")",
        linkLayout: (d) => {
          return "M" + d.x * (vscale.x || 1) + "," + d.y / (vscale.y || 1)
            + "C" + (d.x + d.parent.x) / (vscale.x / 2 || 2) + "," + d.y / (vscale.y || 1)
            + " " + (d.x + d.parent.x) / (vscale.x / 2 || 2) + "," + d.parent.y / (vscale.y || 1)
            + " " + d.parent.x * (vscale.x || 1) + "," + d.parent.y / (vscale.y || 1);
        },
        linkLayoutTarget: (d) => {
          return "M" + d.target.x + "," + d.target.y
            + "C" + (d.target.x + d.source.x) / 2 + "," + d.target.y
            + " " + (d.target.x + d.source.x) / 2 + "," + d.source.y
            + " " + d.source.x + "," + d.source.y;
        },
        nodeLayout: (d) => {
          return "translate(" + d.x * (vscale.x || 1) + "," + d.y / (vscale.y || 1) + ")";
        }
      }
    };
    // 开关函数
    const toggle = (d) => {
      if (d.children) {
        //如果有子节点
        d._children = d.children; //将该子节点保存到 _children
        d.children = null;  //将子节点设置为null
      } else {
        //如果没有子节点
        d.children = d._children; //从 _children 取回原来的子节点
        d._children = null; //将 _children 设置为 null
      }
    }
    const { action } = this.state;
    const layout = orientations[action];

    const svgTem = d3.select(this.refs.svg)
      .attr("width", layout.svgSize.width)
      .attr("height", layout.svgSize.height),
      g = svgTem.append("g")
        .attr("transform", layout.gPosition);
    svgTem.call(zoom.on('zoom', () => {
      g.attr('transform', `translate(${d3.event.transform.x}, ${d3.event.transform.y}) scale(${d3.event.transform.k})`);
    }));
    svgTem.call(drag.on('drag', () => {
      g.attr("transform", "translate(" + d3.event.y + "," + d3.event.y + ")")
    }))

    tree = d3.tree()
      .size(layout.size)
      // .nodeSize(layout.nodeSize)
      .separation(function (a, b) { // 扩展层级高度
        return (a.parent === b.parent ? 1 : 2) / a.depth;
      });
    let nodes = d3.hierarchy(treeData, function (d) { // 分配数据到层次布局上,用于建立父子关系
      return d.children;
    });
    nodes = tree(nodes); // 将节点数据映射到树形布局


    const link = g.selectAll(".link") // 各个节点之间添加连线
      // .data(nodes.descendants().slice(1)) // 除了顶级不需要连线,其他节点开始计算节点连线
      .data(nodes.links()) // 除了顶级不需要连线,其他节点开始计算节点连线
      .enter().append("path")
      .attr("class", "link")
      .attr("d", layout.linkLayoutTarget)
      // .attr("d", layout.linkLayout);
    const node = g.selectAll(".node") // 将每个节点添加为一个组
      .data(nodes.descendants())
      .enter().append("g")
      .attr("class", function (d) {
        return "node" +
          (d.children ? " node--internal" : " node--leaf");
      })
      .attr("transform", layout.nodeLayout);
    // node.append("rect") // 为每一个节点添加矩形
    //   .attr("width", 80)
    //   .attr("height", 60)
    //   .attr("class", function (d) {
    //     return d.children ? 'blueRect' : 'whiteRect';
    //   })
    //   .attr("x", function (d) {
    //     return -40;
    //   })
    //   .attr("y", function (d) {
    //     return -30;
    //   });
    node.append("circle") // 为每一个节点添加小原点
      .attr("class", "node-twinkle")
      .attr("r", function (d) { return d.children ? 8 : 10; })
      // .attr("cx", function (d) {
      //   return d.children ? 49 : 53;
      // });
    // node.append("text") // 为每一个节点添加文字
    //   .attr("dy", ".35em")
    //   .attr("x", -30)
    //   .attr("class", function (d) {
    //     return d.children ? 'childText' : 'lastText';
    //   })
    //   .style("text-anchor", function (d) {
    //     // return d.children ? "end" : "start";
    //     return "start";
    //   })
    //   .text(function (d) { return d.data.name; });
    // // });
  };

  // 重构函数
  redraw = (source) => {
    //重新计算节点和连线
    const nodes = tree.nodes(root);
    const links = tree.links(nodes);

    //获取节点的update部分
    const nodeUpdate = svg.selectAll(".node")
      .data(_nodes, function (d) { return d.name; });

    //获取节点的enter部分
    const nodeEnter = nodeUpdate.enter();

    //在给enter部分添加新的节点时，添加监听器，应用开关切换函数
    nodeEnter.append("g")
      .on("click", function (d) {
        toggle(d);
        redraw(d);
      });
  }

  resetSvg() { // 重置svg
    const width = 800, height = 600;
    const svgTem = d3.select('svg');
    d3.select('#divTreeChart').selectAll("*").remove();
    svgTem.selectAll("*").remove();
    svgTem.attr('width', width)
      .attr('height', height);
  }
  onSliderChange = (even) => {
    this.setState({
      action: even.target.value
    });
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
        <div>
          <svg className="svgWrap" ref="svg">
          </svg>
        </div>
        <Row>
          <Col span={12}>
            <Radio.Group value={this.state.action} onChange={this.onSliderChange}>
              <Radio.Button value="horizontal">水平布局</Radio.Button>
              <Radio.Button value="vertical">垂直布局</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </div>
    );
  }
};
export default Tree;
