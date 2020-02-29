import React, { Component } from "react";
import "./index.scss";

export default class Status extends Component {
  render() {
    const { doneTodos, totalTodos } = this.props;

    return (
      <div className="todo-status">
        <h1 className="todo-title">ToDo List</h1>
        <p className="todo-info">{`${doneTodos} done, ${totalTodos -
          doneTodos} more to do`}</p>
      </div>
    );
  }
}
