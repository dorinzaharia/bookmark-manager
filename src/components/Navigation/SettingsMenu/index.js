// External imports
import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  ImportOutlined,
  ExportOutlined
} from "@ant-design/icons";

const SettingsMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
      <NavLink to="/dashboard/settings">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<ImportOutlined />}>
      <NavLink to="/dashboard/settings/import">Import</NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<ExportOutlined />}>
      <NavLink to="/dashboard/settings/export">Export</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SettingsMenu;
