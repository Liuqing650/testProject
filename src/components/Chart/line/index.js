import React from 'react';
import * as d3 from 'd3';
import { Row, Col, Button } from 'antd';
import styles from './index.less';
import enterPic from '../../../assets/enter.png';

const title = '基本图形';
class Line extends React.Component {

  componentWillMount() {
    // this.xScale = d3.scaleLinear();
    // this.xAxis = d3.axisBottom(this.xScale)
    // const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
    // this.renderCompleteLine(dataset);
  }

  componentDidMount() {
    const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
    this.renderCompleteLine(dataset);
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
            this.resetSvg(null, true);
            this.changePic(index);
            switch (index) {
              case 0: this.renderDom();
                break;
              case 1: this.renderLine([250, 210, 170, 130, 90]);
                break;
              case 2: this.renderDomain1([1.2, 2.3, 0.9, 1.5, 3.3]);
                break;
              case 3: this.renderxAxis([1.2, 2.3, 0.9, 1.5, 3.3]);
                break;
              case 4: this.renderAttr();
                break;
              default: this.renderWelcome();
            }
          }
        })
      }
    })
    if (!isThisChart) {
      this.clearAll();
    }
  }

  changePic(index) {
    switch (index) {
      case 4: d3.select(this.refs.pic).append('img').attr('src', enterPic).attr('style', 'height: 300px');
        break;
      default: d3.select(this.refs.pic).selectAll("img").remove();
        break;
    }
  }
    renderDom() { // Dom元素操作
        const dataset = ["I like dog", "I like cat", "I like snake"];
        const div = d3.select(this.refs.test)
                    .insert("div", ".insert")
                    .text("insert div element")
                    .selectAll("p")
                    .data(dataset)
                    .text(function(d, i) {
                    return d;
                    });
        const deleteDom=d3.select(this.refs.delete)
                        .remove();
    }

    renderLine(dataset, linear, ordinal, xAxis, yAxis) { // 实现简单的条形图
      const width = 300, height = 300;
      const padding = { left: 30, right: 30, top: 40, bottom: 20 };
      const svg = d3.select(this.refs.svgtest)
                  .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                  .attr("width", width)
                  .attr("height",height);
      const rectHeight = 25;
      this.resetSvg(svg,false);
      svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x",20)
          .attr("y",function(d,i) {
              return i * rectHeight;
          })
          .attr("width",function(d){
              return linear ? linear(d) :d;
          })
          .attr("height",rectHeight - 2)
          .attr("fill",function(d) {
              return ordinal ? ordinal(d) : "steelblue";
          });
      if (xAxis) {
        // axis(svg.append("g"));
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", `translate(20,${rectHeight * dataset.length})`)
          .call(xAxis);
      }
      if (yAxis) {
        // axis(svg.append("g"));
        svg.append("g")
          .attr("class", "axis")
          .attr("transform", `translate(0,${rectHeight})`)
          .call(yAxis);
      }
    }

    renderDomain1(dataset) { // 线性比例尺
        const min=d3.min(dataset),
              max=d3.max(dataset);
        const linear = d3.scaleLinear()
                        .domain([min,max])
                        .range([0,300]);
        // this.renderLine(dataset, linear);
        this.renderDomain2(dataset, linear);
    }

    renderDomain2(dataset, linear) { // 序数比例尺
        const color = ["red", "blue", "green", "yellow", "black"];
        const ordinal = d3.scaleOrdinal()
            .domain(dataset)
            .range(color);
        this.renderLine(dataset, linear ? linear: false, ordinal);
    }

    renderxAxis(dataset) { // 坐标轴
        const max = d3.max(dataset);
        const xlinear = d3.scaleLinear()
            .domain([0, max])
            .range([0, 300]);
        const xAxis = d3.axisBottom(xlinear)
          .ticks(10);
        this.renderLine(dataset, xlinear ? xlinear : false, false, xAxis);
    }

    renderAttr() { // enter与update
      const dataset = [3, 6, 9, 12, 15];
      const test = d3.select(this.refs.text)
      const text = test.selectAll('em');
      const update = text.data(dataset);
      const enter = update.enter();
      update.text(function(d){
        return 'update' + d;
      });
      enter.append("em")
           .text(function(d){
        return 'enter' + d;
      })
    }

    renderWelcome() { // 初始页面
      const svg = d3.select(this.refs.svg);
      svg.append('text')
        .attr('dy', '1em')
        .attr('style', 'font-size:100px;')
        .text('Hello D3.js');
    }

    renderCompleteLine(dataset) { // 完整的直线坐标轴
      const width = 400, height= 400;
      // 添加svg画布
      const svg = d3.select('svg')
                    .attr('width', width)
                    .attr('height', height);
      const padding = {left:30, right:30, top:20, bottom:20};
      // 定义比例尺
      const xScale = d3.scaleBand()
                       .domain(d3.range(dataset.length))
                       .range([0, width - padding.left - padding.right]);
      const yScale = d3.scaleLinear()
                       .domain([0, d3.max(dataset)])
                       .range([height - padding.top - padding.bottom, 0]);
      // 定义坐标轴
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);
      // 添加矩形和文字
      const rectPadding = 4;
      const rects = svg.selectAll(styles.myRect)
                       .data(dataset)
                       .enter()
                       .append('rect')
                       .attr('class', styles.myRect)
                       .attr('transform', 'translate(' + padding.left + ',' + padding.top +')')
                       .attr('x', function(d, i) {
                         return xScale(i) + rectPadding/2;
                       })
                       .attr('y', function(d, i) {
                         return yScale(d);
                       })
                       .attr('width', xScale.bandwidth() - rectPadding)
                       .attr('height', function(d) {
                         return height - padding.top - padding.bottom - yScale(d);
                       })
      const text = svg.selectAll(styles.myText)
                      .data(dataset)
                      .enter()
                      .append('text')
                      .attr('class', styles.myText)
                      .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                      .attr('x', function(d, i) {
                        return xScale(i) - rectPadding;
                      })
                      .attr('y', function (d, i) {
                        const min = yScale.domain()[0];
                        return yScale(min) - rectPadding;
                      })
                      .transition()
                      .delay(function(d, i){
                        return i * 200;
                      })
                      .duration(2000)
                      .ease(d3.easeLinear)
                      .attr('y', function(d) {
                        return yScale(d) - rectPadding;
                      })
                      .attr('dx', function() {
                        return (xScale.bandwidth() - rectPadding)/2;
                      })
                      .attr('dx', function(d) {
                        return 20;
                      })
                      .text(function(d){
                        return d;
                      });
      // 添加坐标轴
      svg.append('g')
         .attr('class','axis')
         .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
         .call(xAxis);
      svg.append('g')
         .attr('class', 'axis')
         .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
         .call(yAxis);
    }
    resetSvg(node, isAll) { // 重置svg
      if(isAll) {
        const svg = d3.select('svg');
        svg.selectAll("*").remove();
        const test = d3.select(this.refs.test);
        test.attr('style', 'display: block;');
        // 重现右边图形
        this.renderCompleteLine([10, 20, 30, 40, 33, 24, 12, 5]);
      } else {
        node.selectAll("*").remove()
      }
    }
    clearAll() {
      // 清除svg
      const svg = d3.select('svg');
      svg.selectAll("*").remove();
      // 清除文字样式
      const test = d3.select(this.refs.test);
      test.attr('style', 'display: none;');
      // 清除文字样式
      const text = d3.select(this.refs.text)
      const em = text.selectAll('em').remove();
      text.append('em')
      text.append('em')
      text.append('em')
    }
  render() {
    // console.log('d3-------->', d3);
    return (
      <div>
        <Row>
          <Col span={12}>
            <svg ref="svg">
            </svg>
          </Col>
          <Col span={12}>
            <svg ref="svgtest">
            </svg>
            <div ref="test">
              <p className="insert">dog</p>
              <p>cat</p>
              <p ref="delete">pig</p>
            </div>
            <div ref="text">
              <em></em>
              <em></em>
              <em></em>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={4}>
            <div ref="pic"></div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Line;
