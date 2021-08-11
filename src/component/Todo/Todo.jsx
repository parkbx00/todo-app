import React, { useRef, useState } from "react";
import styles from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, onDelete, onUpdate: handleUpdateTodo }) {
  const [editOn, setEditOn] = useState(false);
  const inputRef = useRef();

  const handleDeleteTodo = () => {
    onDelete(todo);
  };

  return (
    <li
      className={styles.todo}
      onDoubleClick={() => {
        !editOn && setEditOn(true);
        inputRef.current.focus();
      }}
    >
      <span
        className={
          editOn ? `${styles.title}` : `${styles.title} ${styles.active}`
        }
      >
        {todo.title}
      </span>
      <input
        className={
          editOn ? `${styles.input} ${styles.active}` : `${styles.input}`
        }
        type="text"
        defaultValue={todo.title}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          inputRef.current.blur();
        }}
        onBlur={() => {
          handleUpdateTodo(inputRef.current.value, todo.id);
          setEditOn(false);
        }}
      />
      <FontAwesomeIcon
        className={styles.delete}
        icon={faTrash}
        onClick={handleDeleteTodo}
      />
    </li>
  );
}

export default Todo;
