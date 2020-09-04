// External imports
import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Typography
} from 'antd';
import { NavLink} from "react-router-dom";

// CSS
import "antd/dist/antd.css";
import "./index.css";

const { Title } = Typography;


class SignUp extends Component {

  onFinish = values => {
    console.log('Received values of form: ', values);
  }

  render() {

    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
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
          offset: 8,
        },
      },
    };

  
    
    return (
      <>
      <Title className="sign-up-form">Sign Up</Title>
      <Form
      {...formItemLayout}
      name="register"
      onFinish={this.onFinish}
      scrollToFirstError
      className="sign-up-form"
    >
        <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <div className="bottom-link">
        Or <NavLink to="/signin" > sign in now!</NavLink>
        </div>
      </Form.Item>
    </Form>
    </>
    );
  }
}

export default SignUp;
