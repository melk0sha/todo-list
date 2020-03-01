import React, { Component } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Status from "./components/Status";
import Search from "./components/Search";
import Filter from "./components/Filter";

export default class App extends Component {
  state = {
    inputValue: "",
    todoList: [],
    activeFilter: "all"
  };

  onSearchChange = ({ target: { value } }) => {
    const { todoList } = this.state;

    todoList.forEach(
      (todoItem) => (todoItem.visible = todoItem.value.includes(value))
    );
    this.setState({ todoList });
  };

  onAllClick = () => {
    const { todoList } = this.state;

    todoList.forEach((todoItem) => (todoItem.visible = true));
    this.setState({ todoList, activeFilter: "all" });
  };

  onActiveClick = () => {
    const { todoList } = this.state;

    todoList.forEach((todoItem) => (todoItem.visible = !todoItem.done));
    this.setState({ todoList, activeFilter: "active" });
  };

  onDoneClick = () => {
    const { todoList } = this.state;

    todoList.forEach((todoItem) => (todoItem.visible = todoItem.done));
    this.setState({ todoList, activeFilter: "done" });
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  onInputKeyPress = ({ key }) => {
    const { inputValue, todoList } = this.state;

    if (key === "Enter" && inputValue) {
      todoList.push({ value: inputValue, done: false, visible: true });
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
    const {
      onSearchChange,
      onAllClick,
      onActiveClick,
      onDoneClick,
      onInputChange,
      onInputKeyPress,
      onDeleteClick,
      onTodoClick
    } = this;
    const { inputValue, todoList, activeFilter } = this.state;
    const doneTodos = todoList.filter((todoItem) => todoItem.done).length;
    const totalTodos = todoList.length;

    return (
      <div className="todo-container">
        <Status doneTodos={doneTodos} totalTodos={totalTodos} />
        <div class="todo-widget">
          <Search onSearchChange={onSearchChange} />
          <Filter
            activeFilter={activeFilter}
            onAllClick={onAllClick}
            onActiveClick={onActiveClick}
            onDoneClick={onDoneClick}
          />
        </div>
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
