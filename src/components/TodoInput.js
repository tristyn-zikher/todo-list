import React from 'react';

const TodoInput = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoInput;
