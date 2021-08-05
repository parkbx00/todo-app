import React from "react";
import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

function TodoList({ todosList, onDelete }) {
  const handleDeleteTodo = (todo) => {
    onDelete(todo);
  };

  const doesTodosExist = todosList.length > 0 ? true : false;

  return (
    <ul className={styles.list}>
      {doesTodosExist &&
        todosList.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
    </ul>
  );
}

export default TodoList;
