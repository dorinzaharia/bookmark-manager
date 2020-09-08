// External imports
import React, { Component } from "react";
import { Table, Space, Typography, Button } from "antd";
import { Link } from "react-router-dom";

// CSS
import "antd/dist/antd.css";

// Internal imports
import CollectionEditForm from "../CollectionEditForm";
import CollectionNewForm from "../CollectionNewForm"

const { Title } = Typography;

class Collections extends Component {
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
        render: (text) => (
          <Link to={`/dashboard/bookmarks/${text}`}>{text}</Link>
        ),
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
        <CollectionEditForm
          visible={this.state.visible}
          onClose={this.onClose}
        />
        <Title level={2}>Collections</Title>
        <CollectionNewForm />
        <Table columns={columns} dataSource={data} pagination={false} />
      </>
    );
  }
}

export default Collections;
