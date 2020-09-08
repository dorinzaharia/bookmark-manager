// External imports
import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";

// CSS
import "antd/dist/antd.css";

const { Title } = Typography;

const UserSettings = (props) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 2,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 2,
      },
    },
  };

  return (
    <>
      <Title className="sign-up-form">Change personal data</Title>
      <Form {...formItemLayout} name="register">
        <Form.Item name="name" label="Name">
          <Input defaultValue="Dorin" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          value="dorin.zahariazd@gmail.com"
        >
          <Input defaultValue="dorin.zahariazd@gmail.com" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="allowCollectingData" {...tailFormItemLayout}>
          <Checkbox>Allow collecting data</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserSettings;
