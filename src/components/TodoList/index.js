import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./index.scss";

export default class TodoList extends Component {
  render() {
    const { todoList, onDeleteClick, onTodoItemClick } = this.props;

    return todoList.length ? (
      <ul className="todo-list">
        {todoList.map((todoItem, idx) =>
          todoItem.visible ? (
            <TodoItem
              key={idx}
              todoId={idx}
              todoItem={todoItem.value}
              isDone={todoItem.done}
              onDeleteClick={onDeleteClick}
              onTodoItemClick={onTodoItemClick}
            />
          ) : null
        )}
      </ul>
    ) : (
      <p className="todo-nothing">There is no any task to do</p>
    );
  }
}
