import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit} className="input-group mb-3">
      <input value={value} onChange={onChange} type="text" className="form-control input" placeholder="Add new to-do" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-secondary" type="submit" id="button-addon2">Add Todo</button>
      </div>
    </form>
  )
}

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default TodoInput;
