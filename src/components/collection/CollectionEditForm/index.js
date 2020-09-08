// External imports
import React, { Component } from "react";
import { Drawer, Form, Button, Input, Select } from "antd";

// CSS
import "antd/dist/antd.css";

const { Option } = Select;

class CollectionEditForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Drawer
          title="Edit collection"
          placement="left"
          width={400}
          onClose={this.props.onClose}
          visible={this.props.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.props.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.props.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical">
            <Form.Item name="title" label="Title">
              <Input placeholder="Please enter title" />
            </Form.Item>
            <Form.Item name="bookmarks" label="Add Bookmarks">
              <Select
                mode="multiple"
                placeholder="Please select Columns"
                onChange={this.handleSelectAll}
              >
                <Option key="option" value="option">
                  option
                </Option>
              </Select>
            </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default CollectionEditForm;
