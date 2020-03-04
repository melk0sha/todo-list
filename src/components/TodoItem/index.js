import React, { Component } from "react";
import "./index.scss";

export default class TodoItem extends Component {
  render() {
    const {
      todoId,
      todoItem,
      isDone,
      onDeleteClick,
      onTodoItemClick
    } = this.props;

    return (
      <li className="todo-item" onClick={onTodoItemClick} data-id={todoId}>
        <div className="todo-item-wrapper">
          {isDone ? (
            <i className="todo-done material-icons">done</i>
          ) : (
            <i className="todo-clear material-icons">clear</i>
          )}
          <span className={`todo-text${isDone ? " todo-text-done" : ""}`}>
            {todoItem}
          </span>
        </div>
        <i className="todo-delete material-icons" onClick={onDeleteClick}>
          delete
        </i>
      </li>
    );
  }
}
