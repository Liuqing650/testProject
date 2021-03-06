import React from 'react';
import Layout from './layout';
import nav from './nav/index';
import Line from './line';
import Dynamic from './dynamic';
import Book from './book';
import Tree from './tree';
import OtherComponent from './other';

const ChartPage = (main) => {
  const { menu, changeValue } = main;
  const menus = nav.menus;
  const defaultOpenKeys = nav.defaultOpenKeys;
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

  const BookProps = {
    menus: menus,
    activeMenu: menu,
  }

  const TreeComponentProps = {
    menus: menus,
    activeMenu: menu,
  }

  const OtherComponentProps = {
    menus: menus,
    activeMenu: menu,
  }

  const layoutProps = {
    title: 'D3.js',
    defaultOpenKeys: ['sub-4'],
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
      case '3':
        return <Book {...BookProps} isOpen={index} />;
        break;
      case '4':
        return <Tree {...TreeComponentProps} isOpen={index} />;
        break;
      case '5':
        return <OtherComponent {...OtherComponentProps} isOpen={index} />;
        break;
      default:
        return <Line {...LineProps} isOpen='1' />;
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
