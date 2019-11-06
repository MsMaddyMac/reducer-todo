import React, { useReducer, useState } from 'react';

import { initialState, reducer } from '../reducers/reducer';
import TodoList from './TodoList';

export default function TodoForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_NEW_TODO", 
        payload: {name: newTodo, 
        completed: false,
        id: Date.now()} })
    }

    const toggleCompleted = id => {
        dispatch({ type: "TOGGLE_COMPLETED_TODO", payload: id })
    }

    const clearCompleted = () => {
        dispatch({ type: "CLEAR_COMPLETED_TODO" })
    }

    return (
        <>
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    name="item"
                    id="item"
                    value={newTodo}
                    onChange={handleChanges}
                    placeholder="Add Todo"
                />
                <button type="submit" >Add</button>
            </form>
            <TodoList 
                todo={state} 
                toggleCompleted={toggleCompleted}
                clearCompleted={clearCompleted}  
            />
        </>
    )
}

