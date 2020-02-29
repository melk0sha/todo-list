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
      todoList.push(inputValue);
      this.setState({ inputValue: "", todoList });
    }
  };

  onDeleteClick = (event) => {
    event.stopPropagation();
    const {
      target: {
        dataset: { id }
      }
    } = event;
    let { todoList } = this.state;

    todoList = todoList.filter((todoItem, idx) => idx !== +id);
    this.setState({ todoList });
  };

  render() {
    const { onInputChange, onInputKeyPress, onDeleteClick } = this;
    const { inputValue, todoList } = this.state;

    return (
      <div className="todo-container">
        <Status />
        <Input
          inputValue={inputValue}
          onInputChange={onInputChange}
          onInputKeyPress={onInputKeyPress}
        />
        <TodoList todoList={todoList} onDeleteClick={onDeleteClick} />
      </div>
    );
  }
}
