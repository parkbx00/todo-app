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
        {
          id: uuidv4(),
          title: "Click the trashcan icon to delete todos.",
        },
        {
          id: uuidv4(),
          title:
            "Edit todos by double clicking the todo and press enter key when finished.",
        },
      ];
      this.setState({ todos });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    document.title =
      this.state.todos.length > 0
        ? `Todo: ${this.state.todos.length} left`
        : "🎉 Congrats! No todos left.";
  }

  handleAddTodo = (title) => {
    const todos = [...this.state.todos, { id: uuidv4(), title }];
    this.setState({ todos });
  };

  handleDeleteTodo = (todo) => {
    const todos = this.state.todos.filter((item) => item.id !== todo.id);
    this.setState({ todos });
  };

  handleUpdateTodo = (title, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        todo.id === id && (todo.title = title);
        return todo;
      }),
    });
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
          onUpdate={this.handleUpdateTodo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
