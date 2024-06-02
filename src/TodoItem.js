import React from 'react';

function TodoItem({ todo, index, removeTodo, toggleTodo }) {
  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      {todo.text}
      <div>
        <button onClick={() => toggleTodo(index)}>
          {todo.isCompleted ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default TodoItem;
