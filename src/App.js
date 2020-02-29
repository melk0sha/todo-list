import React, { Component } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Status from "./components/Status";

export default class App extends Component {
  state = {
    inputValue: "",
    todoList: []
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  onInputKeyPress = ({ key }) => {
    const { inputValue, todoList } = this.state;

    if (key === "Enter" && inputValue) {
      todoList.push({ value: inputValue, done: false });
      this.setState({ inputValue: "", todoList });
    }
  };

  onDeleteClick = (event) => {
    event.stopPropagation();
    const {
      target: {
        parentElement: {
          dataset: { id }
        }
      }
    } = event;
    let { todoList } = this.state;

    todoList = todoList.filter((todoItem, idx) => idx !== +id);
    this.setState({ todoList });
  };

  onTodoClick = ({
    currentTarget: {
      dataset: { id }
    }
  }) => {
    const { todoList } = this.state;

    todoList[
      todoList.findIndex((todoItem, idx) => idx === +id)
    ].done = !todoList[todoList.findIndex((todoItem, idx) => idx === +id)].done;
    this.setState({ todoList });
  };

  render() {
    const { onInputChange, onInputKeyPress, onDeleteClick, onTodoClick } = this;
    const { inputValue, todoList } = this.state;

    return (
      <div className="todo-container">
        <Status />
        <Input
          inputValue={inputValue}
          onInputChange={onInputChange}
          onInputKeyPress={onInputKeyPress}
        />
        <TodoList
          todoList={todoList}
          onDeleteClick={onDeleteClick}
          onTodoClick={onTodoClick}
        />
      </div>
    );
  }
}
