// External imports
import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import Avatar from "antd/lib/avatar/avatar";
	// External imports: CSS
import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  render() {
    return (
        <Layout style={{minHeight: "100vh"}}>
          <Header style={{ padding: 15 }}>
            <Avatar style={{ float: "right" }} />
            <Title style={{ color: "white" }} level={3}>
              App
            </Title>
          </Header>
          <Layout>
            <Sider >
              <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
                <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ padding: "0 40px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
              </Content>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

export default Dashboard;
