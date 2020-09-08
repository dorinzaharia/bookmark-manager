// External imports
import React, { Component } from "react";
import { Drawer, Form, Button, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// CSS
import "antd/dist/antd.css";

class CollectionNewForm extends Component {
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
    return (
      <>
        <Button type="primary" style={{marginBottom: 15}} onClick={this.showDrawer}>
          <PlusOutlined />
        </Button>
        <Drawer
          title="Add new collection"
          placement="left"
          width={400}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical">
            <Form.Item name="title" label="Title">
              <Input placeholder="Please enter title" />
            </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default CollectionNewForm;
