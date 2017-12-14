import React from 'react';
import * as d3 from 'd3';
import { Row, Col, Button } from 'antd';
import simple from '../../../mock/simple.txt';
import nodeline from '../../../mock/nodeline.txt';
import styles from './index.less';
const ButtonGroup = Button.Group;
const title = '书籍相关';
let linedatasete = [50, 43, 120, 87, 99, 167, 142];
class Book extends React.Component {

  componentDidMount() {
    this.renderLine();
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
            switch (index) {
              case 0: this.renderTest();
                break;
              case 1: this.renderLine();
                this.resetSvg(true);
                break;
              case 2: this.renderScatter();
                break;
              case 3: this.renderSimple();
                break;
              case 4: this.renderAnnular();
                break;
              default: this.renderWelcome();
            }
          }
        })
      }
    })
    if (!isThisChart) {
      this.resetSvg();
    }
  }

  renderLine() { // 条形图
    const datasete = linedatasete;
    const padding = { top: 20, right: 20, bottom: 20, left: 20 };
    const rectStep = 35; // 矩形宽度（含空白）
    const rectWidth = 30; // 矩形宽度(不含空白)
    const width = (datasete.length * rectStep) + (padding.left + padding.right), height = 400;
    const svg = d3.select(this.refs.svg)
      .attr('width', width)
      .attr('height', height);
    const rect = svg.selectAll('rect')
      .data(datasete)
      .enter()
      .append('rect')
      .attr('fill', 'steelblue')
      .attr('x', function(d,i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom;
      })
      .transition()
      .attr('y', function(d) {
        return height - padding.bottom - d;
      })
      .duration(function (d) { return d * 10; })
      .attr('width', rectWidth)
      .attr('height', function (d) { return d; });
    const text = svg.selectAll('text')
      .data(datasete)
      .enter()
      .append('text')
      .attr('fill', function (d) {
        if (d < 15) {
          return 'steelblue';
        }
        return 'white';
      })
      .attr('font-size','16px;')
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom;
      })
      .transition()
      .attr('y', function (d) {
        if (d < 15) {
          return height - padding.bottom - d - 20;
        }
        return height - padding.bottom - d;
      })
      .duration(function (d) { return d * 12; })
      .attr('dx', rectWidth/2)
      .attr('dy', '1em')
      .text(function(d) {
        return d;
      });
    // 测试坐标轴
    // const max = d3.max(datasete);
    // const linear = d3.scaleLinear()
    //   .domain([0, 10])
    //   .range([0, 300]);
    // let ticks = linear.ticks(datasete.length);
    // const tickFomart = linear.tickFormat(datasete.length, '$')
    // for (let index = 0; index < ticks.length; index++) {
    //   ticks[index] = tickFomart(ticks[index]);
    // }

    // const axis = d3.axisBottom(linear);
    // const gAxis = svg.append('g')
    //   .attr('transform', 'translate(80,50)');
    // axis(gAxis);
  }

  drawLine() {
    const datasete = linedatasete;
    const padding = { top: 20, right: 20, bottom: 20, left: 20 };
    const rectStep = 35; // 矩形宽度（含空白）
    const rectWidth = 30; // 矩形宽度(不含空白)
    const svg = d3.select('svg');
    const width = (datasete.length * rectStep) + (padding.left + padding.right), height = svg.attr("height");
    svg.transition()
      .attr('width', width)
      .duration(700);
    const updateRect = svg.selectAll('rect')
      .data(datasete);
    const enterRect = updateRect.enter();
    const exitRect = updateRect.exit();
    // 1.矩形的update部分处理方法
    updateRect.attr('fill', 'steelblue')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom - d;
      })
      .attr('width', rectWidth)
      .attr('height', function (d) { return d; });
    // 2.矩形的enter部分处理方法
    enterRect.append('rect')
      .attr('fill', 'steelblue')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom;
      })
      .transition()
      .attr('y', function (d) {
        return height - padding.bottom - d;
      })
      .duration(function (d) { return d * 10; })
      .attr('width', rectWidth)
      .attr('height', function (d) { return d; });
    // 3.矩形的eixt部分处理方法
    exitRect.remove();
    const updateText = svg.selectAll('text')
      .data(datasete);
    const addText = updateText.enter();
    const exitText = updateText.exit();
    updateText
      .attr('fill', function (d) {
        if (d < 15) {
          return 'steelblue';
        }
        return 'white';
      })
      .attr('font-size', '16px;')
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        if (d < 15) {
          return height - padding.bottom - d - 20;
        }
        return height - padding.bottom - d;
      })
      .attr('dx', rectWidth / 2)
      .attr('dy', '1em')
      .text(function (d) {
        return d;
      });
    // 3.文字的exit部分的处理方法
    exitText.remove();
    addText
      .append('text')
      .attr('fill', function (d) {
        if (d < 15) {
          return 'steelblue';
        }
        return 'white';
      })
      .attr('font-size', '16px;')
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom;
      })
      .transition()
      .attr('y', function (d) {
        if(d < 15) {
          return height - padding.bottom - d - 20;
        }
        return height - padding.bottom - d;
      })
      .duration(function (d) { return d * 12; })
      .attr('dx', rectWidth / 2)
      .attr('dy', '1em')
      .text(function (d) {
        return d;
      });
  }

  renderScatter() { // 散点图
    const center = [
      [0.5, 0.5], [0.7, 0.8], [0.4, 0.9],
      [0.11, 0.32], [0.88, 0.25], [0.75, 0.12],
      [0.5, 0.1], [0.2, 0.3], [0.4, 0.1], [0.6, 0.7]
    ];
    const width=400, height=400;
    const padding = { top: 30, right: 30, bottom: 30, left: 30 };
    const xAxisWidth = width - padding.left - padding.right,
      yAxisWidth = height - padding.top - padding.bottom;
    const svg = d3.select(this.refs.svg)
      .attr('width', width)
      .attr('height', height);
    const xScale = d3.scaleLinear()
      .domain([0, 1.2 * d3.max(center, function(d) {
        return d[0];
      })])
      .range([0, xAxisWidth]);
    const yScale = d3.scaleLinear()
      .domain([0, 1.2 * d3.max(center, function(d) {
        return d[1];
      })])
      .range([yAxisWidth, 0]);
    const circle = svg.selectAll('circle')
      .data(center)
      .enter()
      .append('circle')
      .attr('fill', 'black')
      .attr('cx', function(d) {
        return padding.left + xScale(d[0]);
      })
      .attr('cy', function (d) {
        return height - padding.bottom;
      })
      .transition()
      .attr('cy', function(d) {
        return height - padding.bottom - yScale(d[1]);
      })
      .attr('r', 5)
      .duration(function (d) { return d[0] * 1000; })
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const yGAxis = svg.append('g')
      .attr('transform', 'translate(' + padding.left + ', 0)')
      .call(yAxis);
    const xGAxis = svg.append('g')
      .attr('transform', 'translate(' + padding.left + ', ' + yAxisWidth +')')
      .call(xAxis);
  }

  renderSimple() { // 简单点线图
    const width = 960, height = 500;
    const padding = { top: 30, right: 30, bottom: 30, left: 30 };
    const xAxisWidth = width - padding.left - padding.right,
      yAxisWidth = height - padding.top - padding.bottom;
    const svg = d3.select(this.refs.svg)
      .attr('width', width)
      .attr('height', height);
    // 位置修改
    const ticked = () => {
      link.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      node.attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
    }
    // 模拟数据
    let simulation = d3.forceSimulation()
      .force("charge", d3.forceManyBody().strength(-200))
      .force("link", d3.forceLink().id(function (d) { return d.id; }).distance(40))
      .force("x", d3.forceX(width / 2))
      .force("y", d3.forceY(height / 2))
      .on("tick", ticked);

    let link = svg.selectAll('.link');
    let node = svg.selectAll('.node');
    d3.text(simple, function (error, record) {
      if (error) throw error;
      let graph = JSON.parse(record);
      simulation.nodes(graph.nodes);
      simulation.force("link").links(graph.links);

      link = link.data(graph.links)
        .enter()
          .append('line')
          .attr('class', 'link')
          .attr('stroke', '#999')
          .attr('stroke-width', '1.5px');
      node = node.data(graph.nodes)
        .enter()
          .append('circle')
          .attr('class', 'node')
          .attr('r', 6)
          .attr('stroke', '#000')
          .attr('stroke-width', '1.5px')
          .style('fill', function (d) { return d.id; })
    })
  }

  renderAnnular() { // 复杂点线图
    const width = 960, height = 1000;
    const padding = { top: 30, right: 30, bottom: 30, left: 30 };
    const xAxisWidth = width - padding.left - padding.right,
      yAxisWidth = height - padding.top - padding.bottom;
    const svg = d3.select(this.refs.svg)
      .attr('width', width)
      .attr('height', height);
    const group = svg.append('g');
    // 缩放
    const zoom = d3.zoom();
    svg.call(zoom.on('zoom', () => {
      group.attr('transform', `translate(${d3.event.transform.x}, ${d3.event.transform.y}) scale(${d3.event.transform.k})`);
    }));
    // 位置修改
    const ticked = () => {
      link.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      node.attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
    }
    // 拖拽功能
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
    // 模拟数据
    let simulation = d3.forceSimulation()
      .force("charge", d3.forceManyBody().strength(-200))
      .force("link", d3.forceLink().id(function (d) { return d.name; }).distance(40))
      .force("x", d3.forceX(width / 2))
      .force("y", d3.forceY(height / 2))
      .on("tick", ticked);

    let link = group.selectAll('.link');
    let node = group.selectAll('.node');
    d3.text(nodeline, function (error, record) {
      if (error) throw error;
      let graph = JSON.parse(record);
      simulation.nodes(graph.nodes);
      simulation.force("link").links(graph.links);

      link = link.data(graph.links)
        .enter()
          .append('line')
          .attr('class', 'link')
          .attr('stroke', '#999')
          .attr('stroke-width', '1.5px');
      node = node.data(graph.nodes)
        .enter()
          .append('circle')
          .attr('class', 'node')
          .attr('r', 10)
          .attr('stroke', '#000')
          .attr('stroke-width', '1.5px')
          .style('fill', function (d) {
            if(d.cateType === 2) {
              return 'green'
            }
            return 'red';
          })
          .call(d3.drag()
              .on('start', dragstarted) // 开始拖拽 (对应 mousedown 或 touchstart)
              .on("drag", dragged) // 拖拽中 (对应 mousemove 或 touchmove)
              .on("end", dragended)); // 拖拽结束 (对应 mouseup, touchend 或 touchcancel)
      // 添加标题
      node.append('title')
        .text(function(d) { return d.name; });
      node.append('text')
        .text(function(d) { return d.name; });
    })

    const drawNode = (nodes, nodesData) => {
      svgNodes = nodes
        .selectAll('circle')
        .data(nodesData, (data) => data.name);
      svgNodes.exit().remove();
      const nodeEnter = svgNodes.enter();
      nodeEnter
        .append('g')
        .attr('class', (data)=> {
          return data.category === 0 ? 'circle mainCompany' : 'circle';
        })
        .append('circle')
        .attr('class', (data) => {
          return (data.hide && styles.hide) || (data.cateType === 2 && styles.relativePerson) || (data.category === 0 && `${styles.mainCompany}`) || (data.blackList && data.category !== 7 && styles.blackListNodes) || styles.relativeCompany;
        })
        .attr('r', (data) => {
          return (data.category === 0 && 25) || (data.cateType === 2 && 12) || 8;
        })
        .attr('fill', (data) => {
          return (data.cateType === 2 && this.isLegalHandle(data) && `url(#mainPerson)`) || (data.cateType === 2 && 'url(#person)') || '';
        })
    }
  }

  renderTest() { // 测试效果
    const svg = d3.select(this.refs.svg);
    const datasete = [3, 6, 9];
    const testdata = [2, 5];
    const text = svg.append('text')
      .attr('dy', '2.71em');
    const update = svg.selectAll('text').data(datasete);
    const merge = d3.merge([datasete, testdata])
    // console.log('merge---------->', merge);
    const enter = update.enter();
    update.text(function (d, i) {
      return d + ' ' + i;
    })
      .attr('dy', function (d, i) {
        return (2.71 + i) + 'em';
      });
    enter.append('text')
      .text(function (d, i) {
        return d + ' ' + i;
      })
      .attr('dy', function (d, i) {
        return (2.71 + i) + 'em';
      });
    svg.append('rect')
      .attr('fill', 'steelblue')
      .attr('x', 10)
      .attr('y', 80)
      .attr('width', 10)
      .attr('height', 30)
      .transition()
      .attr('width', 300)
      .duration(3000)
  }

  renderWelcome() { // 初始页面
    this.resetSvg();
    const svg = d3.select(this.refs.svg);
    svg.append('text')
      .attr('dy', '1em')
      .attr('style', 'font-size:80px;')
      .text('Hello D3.js');
  }

  resetSvg(isBtn) { // 重置svg
    let btn = d3.select(this.refs.btn);
    if(isBtn) {
      btn.attr('style','display:block')
      return;
    }
    btn.attr('style', 'display:none')
    const width = 600, height = 120;
    const svg = d3.select('svg');
    svg.selectAll("*").remove();
    svg.attr('width', width)
      .attr('height', height)
  }

  handleChange = (commond) => {
    let datasete = linedatasete;
    switch (commond) {
      case 'asort':
        this.changeValue(datasete.sort(d3.ascending));
        this.drawLine();
        break;
      case 'esort':
        this.changeValue(datasete.sort(d3.descending));
        this.drawLine();
        break;
      case 'add':
        datasete.push(Math.floor(Math.random() * 160));
        this.changeValue(datasete);
        this.drawLine();
        break;
      case 'del':
        datasete.pop();
        this.changeValue(datasete);
        this.drawLine();
        break;
      default:
        break;
    }
  }

  changeValue(data) {
    linedatasete = data;
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
        <div ref="btn">
          <ButtonGroup>
            <Button onClick={() => this.handleChange('asort')}>顺序排序</Button>
            <Button onClick={() => this.handleChange('esort')}>倒序排序</Button>
            <Button onClick={() => this.handleChange('add')}>增加数据</Button>
            <Button onClick={() => this.handleChange('del')}>删除数据</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default Book;
