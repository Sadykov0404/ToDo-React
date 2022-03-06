import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props) {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([
    {
      _id: 1,
      name: "Mustafo",
      isChecked: true,
    },
  ]);

  const onKeyPressNameHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodos((prev) => [
        ...prev,
        { _id: todos.length, name: name, isChecked: false },
      ]);
      setName("");
    }
  };

  const setCheckedTodo = (idx) => {
    const newArray = [].concat(todos);
    newArray[idx].isChecked = !newArray[idx].isChecked;
    setTodos(newArray);
  };
  return (
    <>
      <div>
        <h1>ToDo Приложение</h1>
        {todos &&
          todos.map((todo, idx) => (
            <TodoItem
              key={todo._id}
              idx={idx}
              name={todo.name}
              isChecked={todo.isChecked}
              setCheckedTodo={setCheckedTodo}
            />
          ))}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={onKeyPressNameHandler}
          placeholder="Название..."
        />
      </div>
    </>
  );
}

export default Todo;
