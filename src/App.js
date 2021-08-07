import React, { Component } from "react";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./component/TodoHeader/TodoHeader";
import TodoAddForm from "./component/TodoAddForm/TodoAddForm";
import TodoList from "./component/TodoList/TodoList";
import ThemeToggle from "./component/ThemeToggle/ThemeToggle";
import Footer from "./component/Footer/Footer";

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
    document.title =
      this.state.todos.length > 0
        ? `Todo: ${this.state.todos.length} left`
        : "Todo: Congrats! No todo left.";
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
      <div className={styles.main}>
        <ThemeToggle />
        <TodoHeader todosList={this.state.todos} />
        <TodoAddForm todosList={this.state.todos} onAdd={this.handleAddTodo} />
        <TodoList
          className={styles.list}
          todosList={this.state.todos}
          onDelete={this.handleDeleteTodo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;