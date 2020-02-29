import React, { Component } from "react";
import "./index.scss";

export default class Status extends Component {
  render() {
    return (
      <>
        <h1 className="todo-title">ToDo List</h1>
        <p className="todo-status"></p>
      </>
    );
  }
}
