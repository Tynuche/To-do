import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
