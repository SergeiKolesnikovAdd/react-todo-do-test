import React from "react";
import TodoItem from "../ui/todo-item/todo-item";
import "./todo-list.scss";

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
