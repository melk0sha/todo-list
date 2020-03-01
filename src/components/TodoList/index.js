import React, { Component } from "react";
import "./index.scss";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  render() {
    const { todoList, onDeleteClick, onTodoClick } = this.props;

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
              onTodoClick={onTodoClick}
            />
          ) : null
        )}
      </ul>
    ) : (
      <p className="todo-nothing">There is no any task to do</p>
    );
  }
}
