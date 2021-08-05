import React from "react";

function TodoHeader({ todosList }) {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const year = date.getFullYear();

  return (
    <header>
      <h1>Todo</h1>
      <h3>{`${month}/${day}/${year}`}</h3>
      <span>Total Todos: {todosList.length}</span>
    </header>
  );
}

export default React.memo(TodoHeader);
