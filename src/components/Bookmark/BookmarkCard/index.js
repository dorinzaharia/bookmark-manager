import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EditOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import BookmarkEditForm from "../../Bookmark/BookmarkEditForm";

const { Meta } = Card;

class BookmarkCard extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {

    const item = {
      name: "MyBookmark",
      description: "MyDescription",
      url: "https://facebook.com",
      favicon: "https://facebook.com/favicon.ico",
    };

    const deleteAction = <DeleteOutlined onClick={() => console.log("Click")}/>
    const editAction = <EditOutlined onClick={this.showDrawer}/>
    const copyAction = <CopyToClipboard text="afefefefefea"><CopyOutlined/></CopyToClipboard>

    return (
      <div>
                 <BookmarkEditForm visible={this.state.visible} onClose={this.onClose}/>
      <Card
        style={{ marginTop: 16 }}
        actions={[deleteAction, editAction, copyAction]}
      >
        <Meta
          avatar={<Avatar src={item.favicon} />}
          title={
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          }
          description={item.description}
        />
      </Card>
      </div>
    );
  }
}

export default BookmarkCard;
