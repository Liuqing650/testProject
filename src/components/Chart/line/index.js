import React from 'react';
import * as d3 from 'd3';
import styles from './index.less';

class Line extends React.Component {

  componentWillMount() {
    this.xScale = d3.scaleLinear();
    this.xAxis = d3.axisBottom(this.xScale)
    // this.line = d3.line()
    //          .x((d) => { return d.x; })
    //          .y((d) => { return d.y; });
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
      this.renderAxis();
  }

  renderAxis() {
     this.xScale
         .domain([100, 0])
         .ticks(10);

     d3.select(this.refs.lineChart).call(this.xAxis);
 }

  render() {
    console.log('d3-------->', d3);
    return (
      <div>
        D3.js
        <svg width="500" height="500">
          <g ref="lineChart" />
          {/* <g> <path d={this.line(this.props.data)} /> </g> */}
        </svg>
    </div>
    )
  }
}

export default Line;
