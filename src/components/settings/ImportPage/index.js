// External imports
import React from "react";
import { Upload, message, Button, Typography } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

// CSS
import "antd/dist/antd.css";

const { Title } = Typography;
const { Dragger } = Upload;

const ImportPage = (props) => {
  const options = {
    name: "file",
    multiple: false,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Title>Import bookmarks</Title>
      <div
        style={{
          textAlign: "right",
        }}
      >
        <Button
          style={{ marginBottom: 30 }}
          type="primary"
          icon={<UploadOutlined />}
          size="medium"
        >
          Upload
        </Button>
      </div>
      <Dragger {...options} style={{ maxHeight: "75%" }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Support only for a html file upload.</p>
      </Dragger>

    </>
  );
};

export default ImportPage;
