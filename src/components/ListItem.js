import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ styles, deleteTodo, toggleComplete, todo }) => {
  return (
    <li style={styles} className="mt-2 list-group-item d-flex justify-content-between align-items-center">
      {todo.label}
      <div>
        <input checked={todo.complete} type="checkbox" onClick={ ()=>{ toggleComplete(todo.key, todo.complete) } } className="mr-3" />
        <span onClick={ ()=>{ deleteTodo(todo.key) } } className="badge badge-primary">X</span>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  styles: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
}

export default ListItem;
