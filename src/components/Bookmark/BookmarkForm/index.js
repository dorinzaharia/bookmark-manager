// External imports
import React, { Component } from "react";
import { Drawer, Form, Button, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

  // CSS
import "antd/dist/antd.css";

const { Option } = Select;

class BookmarkForm extends Component {
  state = { visible: false };

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
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined />
        </Button>
        <Drawer
          title="Add new bookmark"
          placement="left"
          width={400}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
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
          <Form layout="vertical" hideRequiredMark>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
                <Form.Item
                  name="url"
                  label="URL"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    placeholder="Please enter url"
                  />
                </Form.Item>
                <Form.Item
                  name="collection"
                  label="Collection"
                >
                  <Select placeholder="Please choose the collection">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Description">
                  <Input.TextArea rows={3} placeholder="please enter description" />
                </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default BookmarkForm;