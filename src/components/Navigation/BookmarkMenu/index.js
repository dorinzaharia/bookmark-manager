// External imports
import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  InboxOutlined,
  FolderOpenOutlined,
  TagsOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const BookmarkMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <NavLink to="/dashboard/bookmarks">All</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<InboxOutlined />}>
        <NavLink to="/dashboard/bookmarks/unsorted">Unsorted</NavLink>
      </Menu.Item>
      <SubMenu key="sub1" icon={<FolderOpenOutlined />} title="Collections">
        <Menu.Item key="5">
          <NavLink to="/dashboard/bookmarks">Item</NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="3" icon={<TagsOutlined />}>
        <NavLink to="/dashboard/bookmarks/tags">Tags</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default BookmarkMenu;
