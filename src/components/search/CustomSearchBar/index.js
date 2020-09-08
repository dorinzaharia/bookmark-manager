// External imports
import React, { Component } from "react";
import { Input, Pagination, Select, Typography } from "antd";

// Internal imports
import SearchCard from "../SearchCard";
import { apiHostname } from "../../../config";

// CSS
import "antd/dist/antd.css";

const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

class CustomSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusCode: "",
      items: [],
      query: "",
      offset: 0,
      count: 10,
      mkt: "en-US",
    };

    this.search = this.search.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleSubmit = () => {
    this.setState({ offset: 0 });
    if (this.state.query) {
      this.search(this.state.query, this.state.offset);
    }
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePrevClick = () => {
    if (this.state.offset >= this.state.count) {
      const newOffset = this.state.offset - this.state.count;
      this.setState({ offset: newOffset });
      this.search(this.state.query, newOffset);
    }
  };

  handleNextClick = () => {
    const newOffset = this.state.offset + this.state.count;
    this.setState({ offset: newOffset });
    this.search(this.state.query, newOffset);
  };

  handleItemClick = (id) => {
    const newItemsArray = this.state.items;
    newItemsArray.splice(id, 1);
    this.setState({ items: newItemsArray });
  };

  search(query, offset) {
    const url = `${apiHostname}/search/custom?q=${query}&count=${this.state.count}&offset=${offset}&mkt=${this.state.mkt}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ items: result });
          if (this.state.items) {
            this.setState({ statusCode: 200 });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    let webResults = null;
    let pagingButtons = null;
    if (this.state.statusCode === 200) {
      webResults = this.state.items.map((item) => (
        <SearchCard
          item={item}
          key={item.id}
          click={() => this.handleItemClick(item.id)}
        />
      ));
      pagingButtons = (
        <div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      );
    }

    return (
      <div>
        <Title level={2}>Custom Search</Title>
        <Search
          name="query"
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={this.handleInput}
          onSearch={this.handleSubmit}
        />
        <Select
          mode="tags"
          tokenSeparators={[","]}
          style={{ minWidth: 300, marginTop: 10, marginBottom: 15 }}
        ></Select>
        <Select style={{ minWidth: 300, marginLeft: 30 }}>
          <Option value="jack">USA</Option>
          <Option value="lucy">UK</Option>
        </Select>
        {webResults}
        {pagingButtons}
      </div>
    );
  }
}

export default CustomSearchBar;
