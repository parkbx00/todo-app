import React from "react";
import styles from "./TodoList.module.css";
import Todo from "../Todo/Todo";

function TodoList({ todosList, onDelete, onUpdate }) {
  const handleDeleteTodo = (todo) => {
    onDelete(todo);
  };

  const handleUpdateTodo = (title, id) => {
    onUpdate(title, id);
  };

  const doesTodosExist = todosList.length > 0 ? true : false;

  return (
    <ul className={styles.list}>
      {doesTodosExist &&
        todosList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
    </ul>
  );
}

export default TodoList;
