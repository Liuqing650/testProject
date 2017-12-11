import React from 'react';
import * as d3 from 'd3';
import { Row, Col, Button } from 'antd';
import styles from './index.less';
const ButtonGroup = Button.Group;
const title = '书籍相关';
class Book extends React.Component {

  state = {
    datasete: [50, 43, 120, 87, 99, 167, 142]
  }

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
    const datasete = this.state.datasete;
    const width = 400, height = 400;
    const svg = d3.select(this.refs.svg)
      .attr('width', width)
      .attr('height', height);
    const padding = { top: 20, right: 20, bottom: 20, left: 20 };
    const rectStep = 35; // 矩形宽度（含空白）
    const rectWidth = 30; // 矩形宽度(不含空白)
    const rect = svg.selectAll('rect')
      .data(this.state.datasete)
      .enter()
      .append('rect')
      .attr('fill', 'steelblue')
      .attr('x', function(d,i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function(d) {
        return height - padding.bottom - d;
      })
      .attr('width', rectWidth)
      .transition()
      .attr('height', function (d) { return d; })
      .duration(1000);
    const text = svg.selectAll('text')
      .data(datasete)
      .enter()
      .append('text')
      .attr('fill', 'white')
      .attr('font-size','16px;')
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom - d;
      })
      .attr('dx', rectWidth/2)
      .attr('dy', '1em')
      .text(function(d) {
        return d;
      });
    // 测试坐标轴
    const max = d3.max(datasete);
    const linear = d3.scaleLinear()
      .domain([0, 10])
      .range([0, 300]);
    // let ticks = linear.ticks(datasete.length);
    // const tickFomart = linear.tickFormat(datasete.length, '$')
    // for (let index = 0; index < ticks.length; index++) {
    //   ticks[index] = tickFomart(ticks[index]);
    // }

    const axis = d3.axisBottom(linear);
    const gAxis = svg.append('g')
      .attr('transform', 'translate(80,50)');
    axis(gAxis);
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
      .attr('cy', function(d) {
        return height - padding.bottom - yScale(d[1]);
      })
      .attr('r', 5)
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const yGAxis = svg.append('g')
      .attr('transform', 'translate(' + padding.left + ', 0)')
      .call(yAxis);
    const xGAxis = svg.append('g')
      .attr('transform', 'translate(' + padding.left + ', ' + yAxisWidth +')')
      .call(xAxis);
  }

  drawLine() {
    const datasete = this.state.datasete;
    const width = 400, height = 400;
    const padding = { top: 20, right: 20, bottom: 20, left: 20 };
    const rectStep = 35; // 矩形宽度（含空白）
    const rectWidth = 30; // 矩形宽度(不含空白)
    const svg = d3.select('svg');
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
      .transition()
      .attr('height', function (d) { return d; })
      .duration(2000);
    // 2.矩形的enter部分处理方法
    enterRect.append('rect')
      .attr('fill', 'steelblue')
      .attr('x', function (d, i) { // 设置矩形坐标
        return padding.left + i * rectStep;
      })
      .attr('y', function (d) {
        return height - padding.bottom - d;
      })
      .attr('width', rectWidth)
      .transition()
      .attr('height', function (d) { return d; })
      .duration(2000);
    // 3.矩形的eixt部分处理方法
      exitRect.remove();

    const updateText = svg.selectAll('text')
      .data(datasete);
    const enterText = updateText.enter();

    const exitText = updateText.exit();
    // （可以省略）
    // 1.文字的update部分的处理方法
    // 2.文字的enter部分的处理方法
    // 3.文字的exit部分的处理方法
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
    let datasete = this.state.datasete;
    switch (commond) {
      case 'sort':
        this.changeValue(datasete.sort(d3.ascending));
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
    this.setState({
      datasete: data
    })
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
            <Button onClick={() => this.handleChange('sort')}>排序</Button>
            <Button onClick={() => this.handleChange('add')}>增加数据</Button>
            <Button onClick={() => this.handleChange('del')}>删除数据</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default Book;
