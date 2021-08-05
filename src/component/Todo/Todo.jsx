import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, onDelete }) {
  const handleDeleteTodo = () => {
    onDelete(todo);
  };

  return (
    <li>
      {todo.title}
      <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTodo} />
    </li>
  );
}

export default Todo;
