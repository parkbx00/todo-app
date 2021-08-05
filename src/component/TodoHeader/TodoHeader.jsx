import React from "react";
import styles from "./TodoHeader.module.css";

function TodoHeader({ todosList }) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo List</h1>
      <h3 className={styles.date}>{`${month}/${day}/${year}`}</h3>
      <p className={styles.highlight}>Left Todos: {todosList.length}</p>
    </header>
  );
}

export default React.memo(TodoHeader);
