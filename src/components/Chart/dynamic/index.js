import React from 'react';
import * as d3 from 'd3';
import { Row, Col, Button } from 'antd';
import population from '../../../mock/population.csv';
import flare from '../../../mock/flare.csv';
import miserables from '../../../mock/miserables.txt';
import styles from './index.less';

const title = '动态图形';
class Dynamic extends React.Component {

  componentDidMount() {
    this.renderDynamic();
  }

  componentDidUpdate() {
    this.changeChart(this.props.activeMenu);
  }

  changeChart(activeMenu) {
    let isThisChart = false;
    let data = [];
    this.props.menus.map((menu)=> {
      if (menu.title === title) {
        data = menu.children;
        data.map((item, index) => {
          if (item.id === activeMenu.eventKey) {
            isThisChart = true;
            this.resetSvg();
            switch (index) {
              case 0: this.renderDynamic();
                break;
              case 1: this.renderLine();
                break;
              case 2: this.renderTree();
                break;
              case 3: this.renderDrag();
                break;
              default: this.renderDynamic();
            }
          }
        })
      }
    })
    if (!isThisChart) {
      this.resetSvg();
    }
  }

  renderDynamic() { // 动态图形
    const width = 800, height= 300;
    const svg = d3.select(this.refs.svg);
          svg.attr("width", width)
             .attr("height", height);
    const circle1 = svg.append('circle').attr('cx', 0).attr('cy', 100).attr('r', 45).style('fill', 'green');
          circle1.transition().duration(1000).attr('cx', 800);

    const circle2= svg.append('circle')
          .attr('cx', 100)
          .attr('cy', 100)
          .attr('r', 45)
          .style('fill', 'green');
    circle2.transition()
          .duration(1500)
          .attr('cx', 800)
          .style('fill', 'red');

    const circle3 = svg.append('circle')
                       .attr('cx', 100)
                       .attr('cy', 100)
                       .attr('r', 45)
                       .style('fill', 'green');
          circle3.transition()
                 .duration(2000)
                 .ease(d3.easeLinear)
                 .attr('cx', 800)
                 .attr('cy', 220)
                 .style('fill', 'red')
                 .attr('r', 25);

  }

  renderLine() { // 条形统计图
    const margin = {top: 20, right: 40, bottom: 30, left: 20},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom,
          barWidth = Math.floor(width / 19) - 1;
    const x = d3.scaleLinear()
          .range([barWidth / 2, width - barWidth /2]);
    const y = d3.scaleLinear()
          .range([height, 0]);
    const yAxis = d3.axisRight(y)
          .tickSize(-width)
          .tickFormat(function(d) {
            return Math.round(d / 1000000) + 'M';
          })
    const svg = d3.select(this.refs.svg)
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    const birthyears = svg.append('g')
          .attr('class', styles.birthyear);
    const title = svg.append('text')
          .attr('class', styles.title)
          .attr('dy', '.71em')
          .text(2000);
    d3.csv(population, function(error, data) {
      data.map((d)=>{
        d.people = +d.people;
        d.year = +d.year;
        d.age = +d.age;
      });
      let age1 = d3.max(data, function(d) { return d.age; }),
            year0 = d3.min(data, function(d) { return d.year; }),
            year1 = d3.max(data, function(d) { return d.year; }),
            year = year1;
      x.domain([year1 - age1, year1]);
      y.domain([0, d3.max(data,function(d) { return d.people; })]);

      data = d3.nest()
        .key(function(d) {
          return d.year; })
        .key(function(d) { return d.year - d.age; })
        .rollup(function(v) { return v.map(function(d) { return d.people; } ); })
        .map(data);
      svg.append('g')
         .attr('class', styles.yaxis)
         .attr('transform', 'translate(' + width + ', 0)')
         .call(yAxis)
         .selectAll('g')
         .filter(function(value) { return !value; })
         .classed(styles.zero, true);
      const birthyear = birthyears.selectAll(styles.birthyear)
         .data(d3.range(year0 - age1, year1 + 1, 5))
         .enter().append('g')
         .attr('class', styles.birthyear)
         .attr('transform', function(birthyear) { return "translate(" + x(birthyear) + ",0)"; });

      birthyear.selectAll('rect')
        .data(function(birthyear) {
          return data['$'+year]['$'+birthyear] || [0, 0];})
        .enter().append('rect')
        .attr('x', -barWidth / 2)
        .attr('width', barWidth)
        .attr('y', y)
        .transition()
        .duration(750)
        .attr('height', function(value) { return height - y(value); })

      birthyear.append("text")
        .attr("y", height - 4)
        .text(function(birthyear) { return birthyear; });
      svg.selectAll(".age")
        .data(d3.range(0, age1 + 1, 5))
        .enter().append("text")
        .attr("class", styles.age)
        .attr("x", function(age) { return x(year - age); })
        .attr("y", height + 4)
        .attr("dy", ".71em")
        .text(function(age) { return age; });
      window.focus();
      d3.select(window).on('keydown', function() {
        switch (d3.event.keyCode) {
          case 37: year = Math.max(year0, year - 10);
            break;
          case 39: year = Math.max(year0, year + 10);
            break;
        }
        update();
      });

      const update = () => {
        let yearstr = '$'+year;
        if(!(yearstr in data)) {
          return;
        }
        title.text(year);
        birthyears.transition()
          .duration(750)
          .attr('transform', 'translate(' + (x(year1) - x(year)) + ',0)');
        birthyear.selectAll('rect')
          .data(function(birthyear) {
            return data[yearstr]['$'+birthyear] || [0, 0];
          })
          .transition()
          .duration(750)
          .attr('y', y)
          .attr('height', function(value) { return height - y(value); });
      }
    })
  }

  renderTree() { // 径向树
    const margin = {top: 20, right: 40, bottom: 30, left: 20},
          width = 960 - margin.left - margin.right,
          height = 1060 - margin.top - margin.bottom;
    const svg = d3.select(this.refs.svg)
          .attr('width', width)
          .attr('height', height);
    const g = svg.append('g').attr('transform', 'translate(' + (width / 2 + 40) + ',' + (height / 2 +90) + ')' );
    // 转换为层级结构
    const stratify = d3.stratify()
          .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf('.')); });
    const tree = d3.tree()
          .size([2 * Math.PI, 500])
          .separation(function(a, b) {
            return (a.parent == b.parent ? 1 : 2) / a.depth;
          })
    d3.csv(flare, function(error, data) {
      if (error) throw error;
      const root = tree(stratify(data));
      const link = g.selectAll(styles.link)
            .data(root.links())
            .enter().append('path')
              .attr('class', styles.link)
              .attr('d', d3.linkRadial()
                .angle(function(d) { return d.x; })
                .radius(function(d) { return d.y; })
              );
      const node = g.selectAll(styles.node)
            .data(root.descendants())
            .enter().append('g')
              .attr("class", function(d) { return `${styles.node} ${d.children ? styles.nodeInternal : styles.nodeLeaf}`; })
              .attr('transform', function(d) { return 'translate(' + radialPoint(d.x, d.y) + ')'; });
      node.append('circle')
          .attr('r', 2.5);
      node.append('text')
          .attr('dy', '0.31em')
          .attr('x', function(d) { return d.x < Math.PI === !d.children ? 6 : -6; })
          .attr('text-anchor', function(d) { return d.x < Math.PI === !d.children ? 'start' : 'end'; })
          .attr('transform', function(d) {
            return 'rotate(' + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ')';
          })
          .text(function(d) { return d.id.substring(d.id.lastIndexOf('.') + 1); });
    });

    const radialPoint = (x, y) => {
      return [(y = +y) * Math.cos(x -= Math.PI /2), y * Math.sin(x)];
    }
  }
  renderDrag() { // 力导图
    const margin = {top: 20, right: 40, bottom: 30, left: 20},
          width = 960 - margin.left - margin.right,
          height = 600 - margin.top - margin.bottom;
    const svg = d3.select(this.refs.svg)
          .attr('width', width)
          .attr('height', height);
    // 颜色序数比例尺
    const color = d3.scaleOrdinal(d3.schemeCategory20);
    // 力学仿真模拟
    const simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id(function(d) { return d.id; }))	  //连线作用力
          .force("charge", d3.forceManyBody())	 //节点间的作用力
          .force("center", d3.forceCenter(width / 2, height / 2));	  //重力，布局有一个参考位置，不会跑偏

    const dragstarted = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };
    const dragged = (d) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };
    const dragended = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    d3.text(miserables , function(error, record) {
      if (error) throw error;
      let graph = JSON.parse(record)
      const link = svg.append('g')
            .attr('class', styles.flinks)
            .selectAll('line')
            .data(graph.links)
            .enter().append('line')
              .attr('stroke-width', function(d) { return Math.sqrt(d.value); });
      const node = svg.append('g')
            .attr('class', styles.fnodes)
            .selectAll('circle')
            .data(graph.nodes)
            .enter().append('circle')
              .attr('r', 5)
              .attr('fill', function(d) { return color(d.group); })
              .call(d3.drag()
                  .on('start', dragstarted) // 开始拖拽 (对应 mousedown 或 touchstart)
                  .on("drag", dragged) // 拖拽中 (对应 mousemove 或 touchmove)
                  .on("end", dragended)); // 拖拽结束 (对应 mouseup, touchend 或 touchcancel)
      node.append('title')
        .text(function(d) { return d.id; });
      const ticked = () => {
        link
          .attr('x1', function(d) { return d.source.x; })
          .attr('y1', function(d) { return d.source.y; })
          .attr('x2', function(d) { return d.target.x; })
          .attr('y2', function(d) { return d.target.y; });
        node
          .attr('cx', function(d) { return d.x; })
          .attr('cy', function(d) { return d.y; });
      };
      simulation
        .nodes(graph.nodes)
        .on('tick', ticked);
      simulation.force('link')
        .links(graph.links);
    });
  }

  resetSvg() { // 重置svg
    const svg = d3.select('svg');
    svg.selectAll("*").remove()
  }

  render() {
    return (
      <div className={styles.wrap}>
        <Row>
          <Col span={24}>
            <div ref="chart">
              <svg ref="svg">
              </svg>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dynamic;
