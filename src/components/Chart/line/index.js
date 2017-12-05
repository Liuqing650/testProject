import React from 'react';
import * as d3 from 'd3';
import styles from './index.less';

class Line extends React.Component {

  componentWillMount() {
    // this.xScale = d3.scaleLinear();
    // this.xAxis = d3.axisBottom(this.xScale)
  }

  componentDidMount() {
    // this.renderAxis();
    // this.renderDom();

    // const dataset = [250, 210, 170, 130, 90];
    // this.renderLine(dataset);

    const dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
    this.renderDomain1(dataset);
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

    renderLine(dataset, linear, ordinal) { // 实现简单的条形图
        const width=300,height=300;
        const svg = d3.select(this.refs.svg)
                    .attr("width", width)
                    .attr("height",height);
        const rectHeight = 25;
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

    renderAxis(dataset) { // 坐标轴
        const max = d3.max(dataset);
        const linear = d3.scaleLinear()
            .domain([0, max])
            .range([0, 300]);

        const axis = d3.xAxis(linear)

        d3.select(this.refs.lineChart).call(this.xAxis);
    }

  render() {
    console.log('d3-------->', d3);
    return (
      <div>
        D3.js
        <svg ref="svg">
        </svg>
        {/* <div ref="test">
          <p className="insert">dog</p>
          <p>cat</p>
          <p ref="delete">pig</p>
        </div> */}
    </div>
    )
  }
}

export default Line;
