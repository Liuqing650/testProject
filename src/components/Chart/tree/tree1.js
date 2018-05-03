import React from 'react';
import * as d3 from 'd3';
import { Slider, InputNumber, Row, Col } from 'antd';
import './tree1.less';
import treeData from '../../../mock/treeData.json';

class Tree extends React.Component {

  state = {
    separationIndex: 1,
    inputValue: 1,
  };
  componentDidMount() {
    this.renderTree();
  }

  componentDidUpdate(newProps) {
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
    const margin = { top: 20, right: 90, bottom: 30, left: 90 },
      width = 660 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    const { separationIndex } = this.state;
    // 声明一个树型布局,分配布局的大小
    // declares a tree layout and assigns the size
    const treemap = d3.tree()
      .size([height, width])
      .separation(function (a, b) { // 扩展层级高度
        return (a.parent === b.parent ? 1 : 2);
      });

    // 加载外部数据
    // d3.json(treeJson, function (error, treeData) {
      // if (error) throw error;
    // 分配数据到层次布局上,用于建立父子关系
    //  assigns the data to a hierarchy using parent-child relationships
    let nodes = d3.hierarchy(treeData, function (d) {
      return d.children;
    });
    // 将节点数据映射到树形布局
    // maps the node data to the tree layout
    nodes = treemap(nodes);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select(this.refs.svg)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
      g = svg.append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    // 各个节点之间添加连线
    // adds the links between the nodes
    const link = g.selectAll(".link")
      .data(nodes.descendants().slice(1)) // 除了顶级不需要连线,其他节点开始计算节点连线
      .enter().append("path")
      .attr("class", "link")
      .attr("d", (d) => {
        console.log('d------->', d);
        return "M" + d.y + "," + d.x
          + "C" + (d.y + d.parent.y) / 2 + "," + d.x
          + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
          + " " + d.parent.y + "," + d.parent.x;
      });

    // 将每个节点添加为一个组
    // adds each node as a group
    const node = g.selectAll(".node")
      .data(nodes.descendants())
      .enter().append("g")
      .attr("class", function (d) {
        return "node" +
          (d.children ? " node--internal" : " node--leaf");
      })
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // 为每一个节点添加小原点
    // adds the circle to the node
    node.append("circle")
      .attr("r", 10);
    // node.append("rect")
    //   .attr("r", 10);

    // 为每一个节点添加文字
    // adds the text to the node
    node.append("text")
      .attr("dy", ".35em")
      .attr("x", function (d) { return d.children ? -13 : 13; })
      .style("text-anchor", function (d) {
        return d.children ? "end" : "start";
      })
      .text(function (d) { return d.data.name; });
    // });
  };
  resetSvg() { // 重置svg
    const width = 800, height = 600;
    const svg = d3.select('svg');
    svg.selectAll("*").remove();
    svg.attr('width', width)
      .attr('height', height);
  }
  onSliderChange = (value) => {
    this.setState({
      inputValue: value,
      separationIndex: value
    });
  }
  render() {
    return (
      <div>
        <div ref="treeChart">
          <svg ref="svg">
          </svg>
        </div>
        <Row>
          <Col span={12}>
            <Slider min={0.1} max={2} onChange={this.onSliderChange} step={0.01} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={0.1}
              max={2}
              style={{ marginLeft: 16 }}
              value={this.state.inputValue}
              onChange={this.onSliderChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
};
export default Tree;
