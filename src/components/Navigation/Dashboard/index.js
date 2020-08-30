// External imports
import React, { Component } from "react";
import { Layout, Menu, Button } from "antd";
import { Route, Switch } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  BookOutlined,
  SearchOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
  // CSS
import "antd/dist/antd.css";
import "./style.css";

// Internal imports
import BookmarkMenu from "../BookmarkMenu";
import SearchMenu from "../SearchMenu";
import SettingsMenu from "../SettingsMenu";
import UserAvatar from "../UserAvatar"

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <BookmarkMenu />
          <SearchMenu />
          <SettingsMenu />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{paddingTop: 50}}>
              <Menu.Item key="1" icon={<BookOutlined />} >
              </Menu.Item>
              <Menu.Item key="2" icon={<SearchOutlined />}></Menu.Item>
              <Menu.Item key="3" icon={<SettingOutlined />}></Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <div className="avatar">
            <UserAvatar avatar="DZ"/>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;

