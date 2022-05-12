import React, { useState } from "react";

import "./index.scss"

import TodoItem from "./TodoItem";
import Completed from "../Completed/Completed";

const Todo = () => {
    const [name, setName] = useState("");
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);

    const onKeyPressHandler = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            setTodos(prev => [...prev, {_id: todos.length, name, isChecked: false}]);
            setName("");
        }
    }

    const toggleCheckedTodo = (idx) => {
        const newArray = [...todos];
        let newCompleted = newArray.splice(idx, 1);
        setTodos(newArray);
        setCompleted((prev) => [...prev, ...newCompleted])
    }

    const InputChecker = (value) => {
        let newValue = value.length > 50 ? value.slice(0, 51) : value;
        setName(newValue);
    }
    return (
        <>
            <input 
            type="text" 
            value={name} 
            onChange={(e) => InputChecker(e.target.value)}
            onKeyPress={onKeyPressHandler}
            placeholder="Write something..."  
            />

            <h1>Todo App</h1>
            {todos &&
                todos.map((todo, idx) => (
                <TodoItem 
                key={`_todo_${todo._id}`} 
                name={todo.name} 
                isChecked={todo.isChecked}
                idx={idx}
                toggleCheckedTodo={toggleCheckedTodo}
                />
            ))}

            <h1>Completed</h1>
            {completed &&
                completed.map((compl) => (
                <Completed 
                key={`completed${compl._id}`}
                name={compl.name}
                />
            ))}
        </>
    )
}

export default Todo;