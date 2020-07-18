import React from "react";
import "./Style.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  FileProtectOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
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
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Analytics
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              Articles
            </Menu.Item>
            <Menu.Item key="4" icon={<FileProtectOutlined />}>
              Projects
            </Menu.Item>
            <Menu.Item key="5" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            www.shadabsutar.com ©2020. Created by Shadab Sutar.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
