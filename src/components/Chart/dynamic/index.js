import React from 'react';
import * as d3 from 'd3';
import { Row, Col, Button } from 'antd';
import styles from './index.less';

const title = '动态图形';
class Dynamic extends React.Component {

  componentDidMount() {
    this.renderDynamic();
  }

  componentDidUpdate() {
    // this.changeChart(this.props.activeMenu);
  }

  renderDynamic() {
    const svg = d3.select(this. refs.svgtest);
    const circle1 = svg.append('circle').attr('cx', 100).attr('cy', 100).attr('r', 45).style('fill', 'green');
          circle1.transition().duration(1000).attr('cx', 300);

    const circle2= svg.append('circle')
          .attr('cx', 100)
          .attr('cy', 100)
          .attr('r', 45)
          .style('fill', 'green');
    circle2.transition()
          .duration(1500)
          .attr('cx', 300)
          .style('fill', 'red');

    const circle3 = svg.append('circle')
                       .attr('cx', 100)
                       .attr('cy', 100)
                       .attr('r', 45)
                       .style('fill', 'green');
          circle3.transition()
                 .duration(2000)
                 .ease(d3.easeLinear)
                 .attr('cx', 300)
                 .style('fill', 'red')
                 .attr('r', 25);

  }

  render() {
    return (
      <div className={styles.wrap}>
        <Row>
          <Col span={12}>
            <svg ref="svg">
            </svg>
          </Col>
          <Col span={12}>
            <svg ref="svgtest">
            </svg>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dynamic;
