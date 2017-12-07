import React from 'react';
import Layout from './layout';
import nav from './nav/index';
import Line from './line';
import Dynamic from './dynamic';

const ChartPage = (main) => {
  const { menu, changeValue } = main;
  const menus = nav;
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
    menus: menus,
    data: createData(10, 100),
    width: 500,
    activeMenu: menu,
  }

  const DynamicProps = {
    menus: menus,
    activeMenu: menu,
  }

  const layoutProps = {
    title: 'D3.js',
    menus: menus,
    callback(menu) {
      changeValue({menu: menu});
    }
  }

  const analysisMenu = (menu) => {
    const tempArr = menu && menu.eventKey ? menu.eventKey.split('-') : ['1'];
    const index = tempArr[0];
    switch (index) {
      case '1':
        return <Line {...LineProps} isOpen={index} />;
        break;
      case '2':
        return <Dynamic {...DynamicProps} isOpen={index} />;
        break;
      default:
        return <Line {...LineProps} isOpen='1' />;
        break;
    }
  }

  return (
    <div>
      <Layout {...layoutProps}>
        {analysisMenu(menu)}
      </Layout>
    </div>
  )
}

export default ChartPage;
