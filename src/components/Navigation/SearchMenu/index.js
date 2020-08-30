// External imports
import React from "react";
import { Menu, Button } from "antd";
import {
  SearchOutlined,
  FileSearchOutlined,
  UnorderedListOutlined,
  EditOutlined
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
      <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Categories">
        <Menu.Item key="5" icon="DB">
          <Button type="text" onClick={() => console.log("click")} style={{color: "white"}}><EditOutlined/></Button>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SettingsMenu;
