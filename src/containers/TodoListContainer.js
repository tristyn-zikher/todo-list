import React from 'react';

const TodoListContainer = ({ children }) => {
  return (
    <div className="todo-container py-5">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">todo list</h5>
            {children && children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoListContainer;
