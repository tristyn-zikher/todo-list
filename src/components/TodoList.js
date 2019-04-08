import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <div className="bd-example">
      <ul className="list-group">
        {
          todos.map((todo, i) => {
            let styles = {};
            if (todo.complete) {
              styles.textDecoration = 'line-through';
            }
            return (
              <ListItem
               todo={todo}
               key={i}
               deleteTodo={deleteTodo}
               toggleComplete={toggleComplete}
               styles={styles}
             />
            )
          })
        }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList;
