import React from "react";

function TodoItem({ idx, name, isChecked, setCheckedTodo }) {
  return (
    <div className="todo-item" onClick={() => setCheckedTodo(idx)}>
      <input type="checkbox" checked={isChecked} />
      <span className="name">{name}</span>
    </div>
  );
}

export default TodoItem;
