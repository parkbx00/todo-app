import React from "react";
import styles from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, onDelete }) {
  const handleDeleteTodo = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <span className={styles.title}>{todo.title}</span>
      <FontAwesomeIcon
        className={styles.delete}
        icon={faTrash}
        onClick={handleDeleteTodo}
      />
    </li>
  );
}

export default Todo;
