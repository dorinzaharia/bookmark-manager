import React, { Component } from "react";
import { Card, Avatar, Tag } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EditOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import BookmarkEditForm from "../BookmarkEditForm";
import "antd/dist/antd.css";
import "./index.css"

const { Meta } = Card;

class BookmarkCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

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

    const { props } = this;
    const card = {
      title: props.title,
      description: props.description,
      url: props.url,
      favicon: new URL(props.url).origin + "/favicon.ico",
      collection: props.collection,
      tags: props.tags
    };

    console.log(card.favicon);

    const deleteAction = (
      <DeleteOutlined onClick={() => console.log("Click")} />
    );
    const editAction = <EditOutlined onClick={this.showDrawer} />;
    const copyAction = (
      <CopyToClipboard text="afefefefefea">
        <CopyOutlined />
      </CopyToClipboard>
    );
    const description = (
      <div>
        <p>{card.description}</p>
        {card.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        <p style={{paddingTop: 10}}>{card.collection}</p>
      </div>
    );

    return (
      <div>
        <BookmarkEditForm visible={this.state.visible} onClose={this.onClose} />
        <Card
          className="card"
          actions={[deleteAction, editAction, copyAction]}
          hoverable
          // small
        >
          <Meta
            avatar={<Avatar src={card.favicon} />}
            title={
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                {card.title}
              </a>
            }
            description={description}
          />
        </Card>
      </div>
    );
  }
}

export default BookmarkCard;
