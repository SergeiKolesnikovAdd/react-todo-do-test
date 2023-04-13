import React, { useState, useEffect } from "react";
import TodoList from "./sections/todo-list";
import "./App.scss";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const handleClick = () => console.log("click")

  useEffect( () => {
    const raw = localStorage.getItem("todos") || "[]"
    setTodos(JSON.parse(raw))
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleClick)
    localStorage.setItem("todos", JSON.stringify(todos))
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [todos]);
    

  const addTodo = event => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };
  return (
    <div className="container">
      <h1>Todo app</h1>
      <div className="input-field">
        <input
          className="task-input"
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyDown={addTodo}
        />
        <label className="input-lable">Todo name</label>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}
