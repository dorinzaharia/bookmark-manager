// External imports
import React, { Component } from "react";
import { Popover, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";

// CSS
import "antd/dist/antd.css";

class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={<Button>Sign out</Button>}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Avatar>{this.props.avatar}</Avatar>
      </Popover>
    );
  }
}

export default UserAvatar;
