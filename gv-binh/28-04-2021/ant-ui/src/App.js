import React, { useState } from "react";
import "./App.scss";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasks from "./components/Tasks";
import Users from "./components/Users";
import Products from "./components/Products";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div className="App">
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/tasks">Tasks</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background custom-head"
              style={{ padding: 0 }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
              <Dropdown overlay={menu} trigger={["click"]}>
                <Avatar size={40} className="custom-icon-user">
                  USER
                </Avatar>
              </Dropdown>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/tasks">
                  <Tasks/>
                </Route>
                <Route exact path="/users">
                  <Users/>
                </Route>
                <Route exact path="/products">
                  <Products/>
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
