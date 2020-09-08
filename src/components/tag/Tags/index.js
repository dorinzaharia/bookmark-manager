// External imports
import React, { Component } from "react";
import { Table, Space, Typography, Button } from "antd";
import { Link } from "react-router-dom";

// CSS
import "antd/dist/antd.css";

// Internal imports
import TagEditForm from "../TagEditForm";
import TagNewForm from "../TagNewForm";

const { Title } = Typography;

class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        render: (text) => <Link to={`/dashboard/tags/${text}`}>{text}</Link>,
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: () => (
          <Space size="middle">
            <Button type="text" onClick={this.showDrawer}>
              Edit
            </Button>
            <Button type="text">Delete</Button>
            <Button type="text">Delete with bookmarks</Button>
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
      },
    ];

    return (
      <>
        <TagEditForm visible={this.state.visible} onClose={this.onClose} />
        <Title level={2}>Tags</Title>
        <TagNewForm />
        <Table columns={columns} dataSource={data} pagination={false} />
      </>
    );
  }
}

export default Tags;
