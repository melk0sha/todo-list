import React, { Component } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Status from "./components/Status";
import Search from "./components/Search";
import Filter from "./components/Filter";
import filterValues from "./constants/filterValues";
import keyCode from "./constants/keyCode";
import "./index.scss";

export default class App extends Component {
  state = {
    inputValue: "",
    searchValue: localStorage.getItem("searchValue") || "",
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    activeFilter: localStorage.getItem("activeFilter") || filterValues.ALL
  };

  componentDidUpdate() {
    const { searchValue, todoList, activeFilter } = this.state;

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("searchValue", searchValue);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      localStorage.setItem("activeFilter", activeFilter);
    });
  }

  handleFiltering = (value, activeFilter) => {
    const { todoList } = this.state;

    switch (activeFilter) {
      default:
      case filterValues.ALL:
        todoList.forEach(
          (todoItem) =>
            (todoItem.visible = todoItem.value.toLowerCase().includes(value))
        );
        break;
      case filterValues.TODO:
        todoList.forEach(
          (todoItem) =>
            (todoItem.visible =
              todoItem.value.toLowerCase().includes(value) && !todoItem.done)
        );
        break;
      case filterValues.DONE:
        todoList.forEach(
          (todoItem) =>
            (todoItem.visible =
              todoItem.value.toLowerCase().includes(value) && todoItem.done)
        );
        break;
    }

    return todoList;
  };

  onSearchChange = ({ target: { value } }) => {
    const { handleFiltering } = this;
    const { activeFilter } = this.state;
    const todoList = handleFiltering(value, activeFilter);

    this.setState({ searchValue: value, todoList });
  };

  onFilterClick = ({ target: { textContent } }) => {
    textContent = textContent.replace(/\s/g, "").toLowerCase();
    const { handleFiltering } = this;
    const { searchValue } = this.state;
    const todoList = handleFiltering(searchValue, textContent);

    this.setState({ todoList, activeFilter: textContent });
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  onInputKeyPress = ({ key }) => {
    const { inputValue, todoList } = this.state;

    if (key === keyCode.ENTER && inputValue) {
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

  onTodoItemClick = ({
    currentTarget: {
      dataset: { id }
    }
  }) => {
    const { todoList } = this.state;
    const todoIndex = todoList.findIndex((todoItem, idx) => idx === +id);

    todoList[todoIndex].done = !todoList[todoIndex].done;
    this.setState({ todoList });
  };

  render() {
    const {
      onSearchChange,
      onFilterClick,
      onInputChange,
      onInputKeyPress,
      onDeleteClick,
      onTodoItemClick
    } = this;
    const { inputValue, searchValue, todoList, activeFilter } = this.state;
    const doneTodos = todoList.filter(
      (todoItem) => todoItem.done && todoItem.visible
    ).length;
    const totalTodos = todoList.filter((todoItem) => todoItem.visible).length;

    return (
      <div className="todo-container">
        <Status doneTodos={doneTodos} totalTodos={totalTodos} />
        <div className="todo-widget">
          <Search searchValue={searchValue} onSearchChange={onSearchChange} />
          <Filter activeFilter={activeFilter} onFilterClick={onFilterClick} />
        </div>
        <Input
          inputValue={inputValue}
          onInputChange={onInputChange}
          onInputKeyPress={onInputKeyPress}
        />
        <TodoList
          todoList={todoList}
          onDeleteClick={onDeleteClick}
          onTodoItemClick={onTodoItemClick}
        />
      </div>
    );
  }
}
