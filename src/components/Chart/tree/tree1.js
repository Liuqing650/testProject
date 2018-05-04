import React from 'react';
import * as d3 from 'd3';
import { Slider, InputNumber, Row, Col, Radio } from 'antd';
import './tree1.less';
import treeData from '../../../mock/treeData.json';

let tree;
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
  renderTree = () => {
    const margin = { top: 50, right: 90, bottom: 60, left: 90 },
      width = 660 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    const vscale = {
      x: 2,
      y: 1
    };
    const orientations = {
      "horizontal": { // 水平布局
        size: [width, height],
        nodeSize: [width / 2, height / 2],
        svgSize: {
          width: width + margin.left + margin.right,
          height: height + margin.top + margin.bottom
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
        size: [width, height],
        nodeSize: [width / 2, height / 2],
        svgSize: {
          width: width + margin.left + margin.right,
          height: height + margin.top + margin.bottom
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
    const toggle = (d) =>{
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

    const zoom = d3.zoom(); // 缩放事件
    const drag = d3.drag(); // 拖拽事件

    const svg = d3.select(this.refs.svg)
      .attr("width", layout.svgSize.width)
      .attr("height", layout.svgSize.height),
      g = svg.append("g")
        .attr("transform", layout.gPosition);
    svg.call(zoom.on('zoom', () => {
      g.attr('transform', `translate(${d3.event.transform.x}, ${d3.event.transform.y}) scale(${d3.event.transform.k})`);
    }));
    svg.call(drag.on('drag', () => {
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

    console.log('nodes------>', nodes);
    console.log('descendants------>', nodes.descendants());
    console.log('links------>', nodes.links());
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

    // 重构函数
    const redraw = (source) => {
      //重新计算节点和连线
      const _nodes = tree.nodes(root);
      const links = tree.links(_nodes);

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
    const svg = d3.select('svg');
    svg.selectAll("*").remove();
    svg.attr('width', width)
      .attr('height', height);
  }
  onSliderChange = (even) => {
    this.setState({
      action: even.target.value
    });
  }
  render() {
    return (
      <div>
        <div ref="treeChart">
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
