import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "shopping", status: "active" },
    { id: "2", text: "sleep", status: "active" },
    { id: "3", text: "study", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (updated.id === todo.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => deleted.id !== todo.id));

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}
