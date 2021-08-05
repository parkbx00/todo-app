import React from "react";
import Todo from "../Todo/Todo";

function TodoList({ todosList, onDelete }) {
  const handleDeleteTodo = (todo) => {
    onDelete(todo);
  };

  const doesTodosExist = todosList.length > 0 ? true : false;

  return (
    <ul>
      {doesTodosExist &&
        todosList.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
    </ul>
  );
}

export default TodoList;
