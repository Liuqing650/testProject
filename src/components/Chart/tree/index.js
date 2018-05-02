import React from 'react';
import * as d3 from 'd3';
import flare from '../../../mock/flare.csv';
import './index.less';

class TreeCom extends React.Component {

  componentDidMount() {
    this.renderTree();
  }

  componentDidUpdate() {
    this.changeChart(this.props.activeMenu);
  }

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
    //绘制svg图形
    const svg = d3.select(this.refs.svg);
    //定义布局范围
    const width = +svg.attr("width");
    const height = +svg.attr("height");
    svg.append("g")
    const g = svg.attr("transform", "translate(40,0)");//定义偏移量

    //定义D3树布局范围
    const tree = d3.tree()
      .size([height, width - 100])//注意D3布局跟svg坐标系无关,size(高，宽)
      .separation(function (a, b) { return (a.parent === b.parent ? 1 : 2); });//设置相隔节点的间距，a、b节点相隔

    const cluster = d3.cluster()
      .size([height, width - 160]);

    const stratify = d3.stratify()
      .parentId(function (d) {
        return d.id.substring(0, d.id.lastIndexOf("."));
      });

    const diagonal = (d) => {
      return "M" + d.y + "," + d.x
        + "C" + (d.parent.y + 100) + "," + d.x
        + " " + (d.parent.y + 100) + "," + d.parent.x
        + " " + d.parent.y + "," + d.parent.x;
    }
    d3.csv(flare, function (error, data) {
      console.log('data-------->', stratify(data));
      if (error) throw error;

      const root = stratify(data)
        .sort(function (a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });

      cluster(root);

      const link = g.selectAll(".link")
        .data(root.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .attr("d", diagonal);

      const node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function (d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

      node.append("circle")
        .attr("r", 2.5);

      node.append("text")
        .attr("dy", 3)
        .attr("x", function (d) { return d.children ? -8 : 8; })
        .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
        .text(function (d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
      (tree)(root);
      const t = d3.transition().duration(750);
      node.transition(t).attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
      link.transition(t).attr("d", diagonal);
    });
    // // 获得当前节点及其所有子节点，若在根节点上调用此方法，则可获得树的全部节点
    // const nodes = root.descendants();
    // //定义连线生成器
    // // const diagonal = d3.svg.diagonal()
    // //   .projection(function (d) { return [d.y, d.x]; });//设置连线点的变换器
    // const line = d3.line()
    //   .x(function (point) { return point.lx; })
    //   .y(function (point) { return point.ly; });

    // const lineData = (d) => {
    //   // i'm assuming here that supplied datum
    //   // is a link between 'source' and 'target'
    //   const points = [
    //     { lx: d.source.x, ly: d.source.y },
    //     { lx: d.target.x, ly: d.target.y }
    //   ];
    //   return line(points);
    // }
    // //加载数据
    // const links = root.links();  //获取节点的连线信息集合
    // console.log('links----->', links);

    // //绘制连线
    // const link = svg.selectAll(".link")
    //   .data(links)
    //   .enter()
    //   .append("path")
    //   .attr("class", "link")
    //   .attr("d", lineData);

    // //绘制节点
    // const node = svg.selectAll(".node")
    //   .data(nodes)
    //   .enter()
    //   .append("g")
    //   .attr("class", "node")
    //   .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; })

    // //添加节点图标
    // node.append("circle")
    //   .attr("r", 4.5);

    // //添加节点显示文本
    // node.append("text")
    //   .attr("dx", function (d) { return d.children ? -8 : 8; })//定义文本显示x轴偏移量
    //   .attr("dy", 3)//定义文本显示y轴偏移量
    //   .style("text-anchor", function (d) { return d.children ? "end" : "start"; })//文字对齐显示
    //   .text(function (d) { return d.name; });
  };
  resetSvg() { // 重置svg
    const width = 960, height = 2400;
    const svg = d3.select('svg');
    svg.selectAll("*").remove();
    svg.attr('width', width)
      .attr('height', height);
  }
  render() {
    console.log('d3-------->', d3);
    // console.log('database-------->', database);
    return (
      <div>
        <h2>Test</h2>
        <div ref="treeChart">
          <svg width="960" height="2400" ref="svg">
          </svg>
        </div>
      </div>
    );
  };
};
export default TreeCom;
