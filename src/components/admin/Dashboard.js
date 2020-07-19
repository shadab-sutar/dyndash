import React from "react";
import "./Style.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  FileProtectOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Home from "./Home";
import ArticleList from "./ArticleList";
import ProjectList from "./ProjectList";
import Analytics from "./Analytics";
import Settings from "./Settings";

import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    activeLink: "1",
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  menuSelect = (e) => {
    this.setState({ activeLink: e.key });
  };

  render() {
    const { Footer, Sider } = Layout;
    const { activeLink } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <b>Dynamic Dashboard</b>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
              onClick={this.menuSelect}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
              onClick={this.menuSelect}
            >
              Analytics
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<FileOutlined />}
              onClick={this.menuSelect}
            >
              Articles
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<FileProtectOutlined />}
              onClick={this.menuSelect}
            >
              Projects
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<SettingOutlined />}
              onClick={this.menuSelect}
            >
              Settings
            </Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />}>
              <Link to={`/`}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {activeLink === "1" ? (
            <Home />
          ) : activeLink === "2" ? (
            <Analytics />
          ) : activeLink === "3" ? (
            <ArticleList />
          ) : activeLink === "4" ? (
            <ProjectList />
          ) : activeLink === "5" ? (
            <Settings />
          ) : (
            ""
          )}
          <Footer style={{ textAlign: "center" }}>
            www.shadabsutar.com ©2020. Created by Shadab Sutar.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
