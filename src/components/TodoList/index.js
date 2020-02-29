import React, { Component } from "react";
import "./index.scss";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  render() {
    const { todoList, onDeleteClick } = this.props;

    return todoList.length ? (
      <ul className="todo-list">
        {todoList.map((todoItem, idx) => (
          <TodoItem
            key={idx}
            todoId={idx}
            todoItem={todoItem}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
    ) : (
      <p className="todo-nothing">There is no any task to do</p>
    );
  }
}
