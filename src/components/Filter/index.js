import React, { Component } from "react";
import filterValues from "../../constants/filterValues";
import "./index.scss";

export default class Filter extends Component {
  render() {
    const { activeFilter, onFilterClick } = this.props;

    return (
      <>
        <button
          className={`todo-filter${
            activeFilter === filterValues.ALL ? " todo-active" : ""
          }`}
          onClick={onFilterClick}
        >
          All
        </button>
        <button
          className={`todo-filter${
            activeFilter === filterValues.TODO ? " todo-active" : ""
          }`}
          onClick={onFilterClick}
        >
          To do
        </button>
        <button
          className={`todo-filter${
            activeFilter === filterValues.DONE ? " todo-active" : ""
          }`}
          onClick={onFilterClick}
        >
          Done
        </button>
      </>
    );
  }
}
