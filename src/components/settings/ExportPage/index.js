// External imports
import React from "react";
import { Button, Typography, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

// CSS
import "antd/dist/antd.css";

const { Title } = Typography;
const { Option } = Select;

const ExportPage = props => {

    return (
      <>
        <Title>Download bookmarks</Title>
        <div style={{marginTop: 50}}>
        <Select style={{minWidth: 300}} placeholder="Please choose the collection" defaultValue="all">
                <Option value="all">All</Option>
                <Option value="collection1">Collection1</Option>
                <Option value="collection2">collection2</Option>
              </Select>
        <Button style={{marginLeft: 30}} type="primary" icon={<DownloadOutlined />} size="medium">
          Download
        </Button>
        </div>
      </>
    );
  }

export default ExportPage;
