import React, {useState} from "react";
import CloseButton from "../close-button/close-button";
import "./todo-item.scss";

export const TodoItem = ({title, id, completed}) => {
    const [checked, setChecked] = useState(completed)
    const cls = ["todo"]
    if (checked) {
        cls.push("completed")
    }

    return (
      <li className={cls.join(" ")}>
        <div className="list-item">
          <input
            className="custom-checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          ></input>
          <label></label>
          <span className="task-title">{title}</span>
          <CloseButton />
        </div>
      </li>
    );
}

export default TodoItem