import React, { Component } from "react";
import "./index.scss";

export default class Search extends Component {
  render() {
    const { onSearchChange } = this.props;

    return (
      <input
        className="todo-search"
        type="text"
        placeholder="Type to search"
        // value={searchValue}
        onChange={onSearchChange}
        // onKeyPress={onInputKeyPress}
      />
    );
  }
}
