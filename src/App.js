import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: [
        {
          label: 'Go to store',
          complete: true,
        }
      ]
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  todoConstructor(val) {
    return {
      label: val,
      complete: false,
    }
  }

  onChange(e) {
    this.setState({todo: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    let todos = this.state.todos.slice(0);
    let newTodo = this.todoConstructor(this.state.todo);
    todos.push(newTodo);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <h1>Tristyns Todo List</h1>
        <TodoInput
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
