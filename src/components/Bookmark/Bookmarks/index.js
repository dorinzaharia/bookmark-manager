// External imports
import React, { Component } from "react";

import "antd/dist/antd.css";
import { Input, Select } from "antd";
const { Search } = Input;

class Bookmarks extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div>
        <Search 
        allowClear
          name="query"
          size="medium"
        />
        <Select style={{paddingTop: 10}} defaultValue="sort by date" options={[{ value: 'sort by date',  }]} />
        <Select mode="tags" tokenSeparators={[","]} style={{width:500, paddingLeft: 30}}></Select>
      </div>
    );
  }
}

export default Bookmarks;
