import "./App.module.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./component/TodoHeader/TodoHeader";
import TodoAddForm from "./component/TodoAddForm/TodoAddForm";
import TodoList from "./component/TodoList/TodoList";

class App extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: "React coding" },
      { id: uuidv4(), title: "JS coding" },
      { id: uuidv4(), title: "TypeScript coding" },
      { id: uuidv4(), title: "Journal" },
    ],
  };

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
