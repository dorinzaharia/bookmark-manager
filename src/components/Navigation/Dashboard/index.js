// External imports
import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

  // Icons
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  BookOutlined,
  SearchOutlined,
} from "@ant-design/icons";


  // CSS
import "antd/dist/antd.css";
import "./index.css";

// Internal imports
import BookmarkMenu from "../BookmarkMenu";
import SearchMenu from "../SearchMenu";
import SettingsMenu from "../SettingsMenu";
import UserAvatar from "../UserAvatar";
import BookmarkForm from "../../Bookmark/BookmarkForm";
import BookmarkCard from "../../Bookmark/BookmarkCard";

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
          <div className="button-add">
            <BookmarkForm />
          </div>
          <Switch>
            <Route path="/dashboard/bookmarks" component={BookmarkMenu} />
            <Route path="/dashboard/search" component={SearchMenu} />
            <Route path="/dashboard/settings" component={SettingsMenu} />
            <Redirect from="/dashboard" to="/dashboard/bookmarks" />
          </Switch>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["bookmarks"]}
            style={{ paddingTop: 50 }}
            onSelect={this.onSelectMenuItem}
          >
            <Menu.Item key="bookmarks" title="Bookmarks" icon={<BookOutlined />}>
            <NavLink to="/dashboard/bookmarks" />
            </Menu.Item>
            <Menu.Item key="search" title="Search" icon={<SearchOutlined />}>
              <NavLink to="/dashboard/search" />
            </Menu.Item>
            <Menu.Item key="settings" title="Settings" icon={<SettingOutlined />}>
              <NavLink to="/dashboard/settings" />
            </Menu.Item>
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
              <UserAvatar avatar="DZ" />
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
            <BookmarkCard />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
