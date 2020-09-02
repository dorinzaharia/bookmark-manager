// External imports
import React from "react";
import { Menu } from "antd";
import {
  SearchOutlined,
  FileSearchOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

const SettingsMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<SearchOutlined />}>
        Web
      </Menu.Item>
      <Menu.Item key="2" icon={<FileSearchOutlined />}>
        Custom
      </Menu.Item>
    </Menu>
  );
};

export default SettingsMenu;
