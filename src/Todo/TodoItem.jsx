import React from "react";

import "./index.scss";

const TodoItem = ({ idx, name, isChecked, toggleCheckedTodo }) => {

    return (
        <div className="todo-item" onClick={() => toggleCheckedTodo(idx)}>
            <input type="checkbox" checked={isChecked} readOnly />
            <span className="name">{name}</span>
        </div>
    )
}

export default TodoItem;