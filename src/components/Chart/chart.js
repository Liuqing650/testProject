import React from 'react';
import { Layout, Row, Col, Menu, Button } from 'antd';
import Line from './line';

const { Content, Sider } = Layout;
const ChartPage = ({
  charts
}) => {

  function createData(index, num) {
    let data = [];
    for (let i = 0; i < index; i++) {
      const obj = {};
      obj.x = parseInt(Math.random() * num);
      obj.y = parseInt(Math.random() * num);
      data.push(obj);
    }
    return data;
  }

  const LineProps = {
    data: createData(10, 100),
    width: 500,
    changeData(chart) {
      console.log('chart5555');
    }
  }


  const changeChart = (chart) => {
    console.log('chart', chart);
  }
  const loopMenu = charts.map((item, index) => {
    return <Menu.Item key={index}>{item}</Menu.Item>
  })
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <h1>D3.js</h1>
          <Menu
            theme="dark"
            mode="inline"
            onClick={changeChart}
            style={{ lineHeight: '100vh' }}
          >
            {loopMenu}
          </Menu>
        </Sider>
        <Content>
          <Line {...LineProps} />
        </Content>
      </Layout>
    </div>
  )
}

export default ChartPage;
