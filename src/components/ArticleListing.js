import React from "react";
import Header from "../commons/AdminHeader";
import { Table, Tag, Space, Button } from "antd";

function ArticleListing() {
  const columns = [
    {
      title: "Article ID",
      dataIndex: "articleID",
      key: "articleID",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag !== "Active" ? "volcano" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      articleID: "001",
      title: "How to code efficiently",
      creationDate: "02 - 02 - 2020",
      status: ["Active"],
      category: "Programming",
      comments: "10",
    },
    {
      key: "2",
      articleID: "002",
      title: "How to run a software business",
      creationDate: "12 - 02 - 2020",
      status: ["Active"],
      category: "Programming",
      comments: "18",
    },
    {
      key: "3",
      articleID: "003",
      title: "How to be at peace",
      creationDate: "22 - 02 - 2020",
      status: ["Draft"],
      category: "Life",
      comments: "00",
    },
  ];
  return (
    <div className="App">
      <Header />
      <div style={{ width: "100%", height: "50px", textAlign: "right" }}>
        <Button type="primary" size="small" style={{ marginTop: "15px" }}>
          New
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default ArticleListing;
