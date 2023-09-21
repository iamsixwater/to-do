import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
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

  const filtered = getFilteredItems(todos, filter);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
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

function getFilteredItems(todos, filter) {
  if (filter === "all") return todos;
  return todos.filter((todo) => todo.status === filter);
}
