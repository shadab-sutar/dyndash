import React from "react";
import { Layout, Table, Tooltip } from "antd";
import { PlusCircleOutlined, FilterOutlined } from "@ant-design/icons";
class ArticleList extends React.Component {
  render() {
    const { Header, Content } = Layout;
    const columns = [
      { title: "Title" },
      { title: "Author" },
      { title: "Created On" },
      { title: "Status" },
      { title: "Actions" },
    ];
    const data = [];
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
            <div
              style={{
                textAlign: "right",
                height: "40px",
              }}
            >
              <Tooltip title="Advance Filter">
                <FilterOutlined
                  style={{
                    fontSize: "24px",
                    marginRight: "10px",
                    color: "blue",
                  }}
                />
              </Tooltip>
              <Tooltip title="New Article">
                <PlusCircleOutlined
                  style={{ fontSize: "24px", color: "green" }}
                />
              </Tooltip>
            </div>
            <Table columns={columns} dataSource={data} />
          </div>
        </Content>
      </div>
    );
  }
}

export default ArticleList;
