import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  ImportOutlined,
  ExportOutlined
} from "@ant-design/icons";

const SettingsMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<ImportOutlined />}>
        Import
      </Menu.Item>
      <Menu.Item key="3" icon={<ExportOutlined />}>
        Export
      </Menu.Item>
    </Menu>
  );
};

export default SettingsMenu;
