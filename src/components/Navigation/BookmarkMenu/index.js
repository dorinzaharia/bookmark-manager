// External imports
import React from "react";
import { Menu } from "antd";
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
        All
      </Menu.Item>
      <Menu.Item key="2" icon={<InboxOutlined />}>
        Unsorted
      </Menu.Item>
      <SubMenu
        key="sub1"
        icon={<FolderOpenOutlined />}
        title="Collections"
      ></SubMenu>
      <Menu.Item key="3" icon={<TagsOutlined />}>
        Tags
      </Menu.Item>
    </Menu>
  );
};

export default BookmarkMenu;
