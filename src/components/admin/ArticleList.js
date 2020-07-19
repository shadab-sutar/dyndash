import React from "react";
import { Layout } from "antd";
class ArticleList extends React.Component {
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    return (
      <div>
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <h1>Articles</h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, marginTop: "10px" }}
          >
            <h1>Article List</h1>
          </div>
        </Content>
      </div>
    );
  }
}

export default ArticleList;
