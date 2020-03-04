import React, { Component } from "react";
import "./index.scss";

export default class Input extends Component {
  render() {
    const { inputValue, onInputChange } = this.props;

    return (
      <div className="todo-add">
        <input
          className="todo-input"
          type="text"
          placeholder="Write to add a task"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onInputChange}
        />
        <button className="todo-input-add" onClick={onInputChange}>
          Add
        </button>
      </div>
    );
  }
}
