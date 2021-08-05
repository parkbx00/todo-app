import "./App.module.css";
import React, { Component } from "react";
import TodoHeader from "./component/TodoHeader/TodoHeader";

export default class App extends Component {
  state = {
    todos: [
      { title: "React coding" },
      { title: "JS coding" },
      { title: "TypeScript coding" },
      { title: "Journal" },
    ],
  };

  render() {
    return (
      <>
        <TodoHeader todosList={this.state.todos} />
      </>
    );
  }
}
