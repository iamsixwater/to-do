import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "shopping", status: "active" },
    { id: "2", text: "sleep", status: "active" },
    { id: "3", text: "study", status: "active" },
  ]);
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
