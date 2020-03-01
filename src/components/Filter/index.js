import React, { Component } from "react";
import "./index.scss";

const filter = {
  all: "all",
  active: "active",
  done: "done"
};
export default class Filter extends Component {
  render() {
    const { activeFilter, onAllClick, onActiveClick, onDoneClick } = this.props;

    return (
      <>
        <button
          className={`todo-filter ${
            activeFilter === filter.all ? "todo-active" : null
          }`}
          onClick={onAllClick}
        >
          All
        </button>
        <button
          className={`todo-filter ${
            activeFilter === filter.active ? "todo-active" : null
          }`}
          onClick={onActiveClick}
        >
          Active
        </button>
        <button
          className={`todo-filter ${
            activeFilter === filter.done ? "todo-active" : null
          }`}
          onClick={onDoneClick}
        >
          Done
        </button>
      </>
    );
  }
}
