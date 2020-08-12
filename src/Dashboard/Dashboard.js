import React, { Component } from "react";
import Item from "../Item/Item";
import './Dashboard.css'

const HOSTNAME = process.env.REACT_APP_HOSTNAME;
const PATHNAME = process.env.REACT_APP_PATHNAME;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusCode: "",
      items: [],
      query: "",
      offset: 0,
      count: 10,
      mkt: 'en-US'
    };
    this.search = this.search.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this)
  }

  handleSubmit = () => {
    this.setState({ offset: 0 })
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
      this.setState({ offset: newOffset })
      this.search(this.state.query, newOffset);
    }
  }

  handleNextClick = () => {
    const newOffset = this.state.offset + this.state.count;
    this.setState({ offset: newOffset })
    this.search(this.state.query, newOffset);
  }

  handleItemClick = (id) => {
    const newItemsArray = this.state.items;
    newItemsArray.splice(id, 1);
    this.setState({ items: newItemsArray })
  }

  search(query, offset) {
    const url = `${HOSTNAME}${PATHNAME}?q=${query}&count=${this.state.count}&offset=${offset}&mkt=${this.state.mkt}`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ items: result.webPages.value });
          if (this.state.items) {
            this.setState({ statusCode: 200 });
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {

    let webResults = null;
    let pagingButtons = null;
    if (this.state.statusCode === 200) {
      webResults = this.state.items.map((item) => <Item item={item} key={item.id} click={() => this.handleItemClick(item.id)} />)
      pagingButtons =
        (<div>
          <button onClick={this.handlePrevClick}>
            Prev
        </button>
          <button onClick={this.handleNextClick}>
            Next
        </button>
        </div>)
    }

    return (
      <div className="app">
        <h1>Search</h1>
        <div className="search">
          <div className="searchBox">
            <input
              className="searchInput"
              onChange={this.handleInput}
              type="text"
              name="query">
            </input>
            <button className="searchButton" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
        </div>
        {webResults}
        {pagingButtons}
      </div>
    );
  }
}

export default Dashboard;
