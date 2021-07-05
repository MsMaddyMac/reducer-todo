import React from 'react';

import './components/Todo.css';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <div className="main-content">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
