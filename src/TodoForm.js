import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !dueDate || !dueTime) return;
    addTodo({
      text: value,
      isCompleted: false,
      dueDate: dueDate,
      dueTime: dueTime
    });
    setValue('');
    setDueDate('');
    setDueTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="time"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
