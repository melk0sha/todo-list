import React, { Component } from "react";
import "./index.scss";

export default class TodoItem extends Component {
  // state = {
  //   done: false
  // };

  // onTodoClick = () => {
  //   this.setState((prevState) => {
  //     return { done: !prevState.done };
  //   });
  // };

  render() {
    // const { onTodoClick } = this;
    // const { done } = this.state;
    const { todoId, todoItem, isDone, onDeleteClick, onTodoClick } = this.props;

    return (
      <li className="todo-item" onClick={onTodoClick} data-id={todoId}>
        <div className="todo-item-wrapper">
          {isDone ? (
            <i className="todo-done material-icons">done</i>
          ) : (
            <i className="todo-clear material-icons">clear</i>
          )}
          <span className={`todo-text ${isDone ? "todo-text-done" : null}`}>
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
