// External imports
import React from "react";
import { Table, Space, Typography } from "antd";

// CSS
import "antd/dist/antd.css";

const { Title } = Typography;

const Tags = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
          <a>Delete with bookmarks</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      title: "Title1",
    },
    {
      key: "2",
      title: "Title2",
    },
    {
      key: "3",
      title: "title3",
    }
  ];

  return (
    <>
      <Title level={2}>Tags</Title>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default Tags;
