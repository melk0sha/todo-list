import React, { Component } from "react";
import "./index.scss";

export default class TodoItem extends Component {
  state = {
    done: false
  };

  onTodoClick = () => {
    this.setState((prevState) => {
      return { done: !prevState.done };
    });
  };

  render() {
    const { onTodoClick } = this;
    const { done } = this.state;
    const { todoItem, todoId, onDeleteClick } = this.props;

    return (
      <li className="todo-item" onClick={onTodoClick}>
        <div className="todo-item-wrapper">
          {done ? (
            <i className="todo-done material-icons">done</i>
          ) : (
            <i className="todo-clear material-icons">clear</i>
          )}
          <span className={`todo-text ${done ? "todo-text-done" : null}`}>
            {todoItem}
          </span>
        </div>
        <i
          className="todo-delete material-icons"
          data-id={todoId}
          onClick={onDeleteClick}
        >
          delete
        </i>
      </li>
    );
  }
}
