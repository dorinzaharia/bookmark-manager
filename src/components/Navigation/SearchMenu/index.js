// External imports
import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

import { SearchOutlined, FileSearchOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const SettingsMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<SearchOutlined />}>
        <NavLink to="/dashboard/search">Web </NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<FileSearchOutlined />}>
        <NavLink to="/dashboard/search/custom">Custom </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SettingsMenu;
