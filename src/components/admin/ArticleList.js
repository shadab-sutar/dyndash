import React from "react";
import { Layout, Table, Tooltip, Modal, Button, Input, Typography } from "antd";
import { PlusCircleOutlined, FilterOutlined } from "@ant-design/icons";
class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      mVisible: false,
    };
  }

  newArticle = () => {
    this.setState({ mVisible: true });
  };

  handleOk = () => {
    this.setState({ mVisible: false });
  };

  handleCancel = () => {
    this.setState({ mVisible: false });
  };
  render() {
    const { Text } = Typography;
    const { Header, Content } = Layout;
    const { mVisible } = this.state;
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
                  onClick={this.newArticle}
                />
              </Tooltip>
            </div>
            <Table columns={columns} dataSource={data} />
            <Modal
              style={{ width: "100%" }}
              title="New Article"
              visible={mVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={this.handleOk}>
                  Save
                </Button>,
              ]}
            >
              <Text>Title</Text>
              <Input />
              <Text>Article</Text>
              <textarea rows="20" cols="65"></textarea>
            </Modal>
          </div>
        </Content>
      </div>
    );
  }
}

export default ArticleList;
