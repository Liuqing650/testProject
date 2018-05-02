import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const { Content, Sider } = Layout;
const LayoutPage = ({
  title,
  menus,
  defaultOpenKeys,
  defaultSelectedKeys,
  callback,
  children
}) => {
  // console.log(menus);
  const changeMenu = (menu) => {
    callback(menu.item.props);
  }
  const loopMenu = (data) => data.map((menu, index) => {
    if (menu.children) {
      return <SubMenu key={`sub-${menu.id}`} title={menu.title}>{loopMenu(menu.children)}</SubMenu>;
    }
    return <Menu.Item key={menu.id}>{menu.title}</Menu.Item>;
  })
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <h1>{title}</h1>
          <Menu
            defaultOpenKeys={defaultOpenKeys}
            theme="dark"
            mode="inline"
            onClick={changeMenu}
            style={{ lineHeight: '100vh' }}
          >
            {loopMenu(menus)}
          </Menu>
        </Sider>
        <Content>
          {children}
        </Content>
      </Layout>
    </div>
  )
}

export default LayoutPage;
