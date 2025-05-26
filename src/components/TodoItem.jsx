import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div>
        <strong>{todo.text}</strong>
        <span className={`priority ${todo.priority.toLowerCase()}`}>
          {todo.priority}
        </span>
      </div>
      <div className="buttons">
        <button onClick={toggleComplete}>
          {todo.completed ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button onClick={deleteTodo} className="delete">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
