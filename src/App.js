import "./App.module.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./component/TodoHeader/TodoHeader";
import TodoAddForm from "./component/TodoAddForm/TodoAddForm";
import TodoList from "./component/TodoList/TodoList";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    if (localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      this.setState({ todos });
    } else {
      const todos = [
        { id: uuidv4(), title: "Todos are listed here." },
        { id: uuidv4(), title: "Click trashcan icon to delete todos." },
      ];
      this.setState({ todos });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  handleAddTodo = (title) => {
    const todos = [...this.state.todos, { id: uuidv4(), title }];
    this.setState({ todos });
  };

  handleDeleteTodo = (todo) => {
    const todos = this.state.todos.filter((item) => item.id !== todo.id);
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <TodoHeader todosList={this.state.todos} />
        <TodoAddForm todosList={this.state.todos} onAdd={this.handleAddTodo} />
        <TodoList
          todosList={this.state.todos}
          onDelete={this.handleDeleteTodo}
        />
      </>
    );
  }
}

export default App;
