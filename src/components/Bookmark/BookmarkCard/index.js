import React from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const { Meta } = Card;

function BookmarkCard(props) {
  const item = {
    name: "MyBookmark",
    description: "MyDescription",
    url: "https://facebook.com",
    favicon: "https://facebook.com/favicon.ico"
  };

  return (
    <Card
      style={{ marginTop: 16 }}
      actions={[<DeleteOutlined />, <EditOutlined />, <CopyOutlined />]}
    >
      <Meta
        avatar={<Avatar src={item.favicon} />}
        title={
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        }
        description={item.description}
      />
    </Card>
  );
}

export default BookmarkCard;
