import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          let styles = {}
          if (todo.complete) {
            styles.textDecoration = 'line-through'
          }
          return (
            <li style={styles}>
              {todo.label}
              <button>x</button>
              <input type="checkbox" />
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList;
