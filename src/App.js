import "./App.module.css";
import React, { Component } from "react";
import TodoHeader from "./component/TodoHeader/TodoHeader";
import TodoAddForm from "./component/TodoAddForm/TodoAddForm";

class App extends Component {
  state = {
    todos: [
      { title: "React coding" },
      { title: "JS coding" },
      { title: "TypeScript coding" },
      { title: "Journal" },
    ],
  };

  handleAddTodo = (title) => {
    const todos = [...this.state.todos, { title }];
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <TodoHeader todosList={this.state.todos} />
        <TodoAddForm todosList={this.state.todos} onAdd={this.handleAddTodo} />
      </>
    );
  }
}

export default App;
