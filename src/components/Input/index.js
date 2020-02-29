import React, { Component } from "react";
import "./index.scss";

export default class Input extends Component {
  render() {
    const { inputValue, onInputChange, onInputKeyPress } = this.props;

    return (
      <input
        className="todo-input"
        type="text"
        placeholder="Write to add a task"
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={onInputKeyPress}
      />
    );
  }
}
