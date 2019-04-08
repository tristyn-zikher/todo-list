import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoListContainer from './containers/TodoListContainer';
import { FIREBASE_CONFIG } from './config'
import * as firebase from 'firebase'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  // initializes firebase then gets all current users
  firebase.initializeApp(FIREBASE_CONFIG);
  let firebaseHeadingRef = firebase.database().ref().child('todos')
  firebaseHeadingRef.on('value', todos => {
    let storedTodos = [];
    let users = todos.val();
    // convert object received from DB to array for mapping
    for (let user in users) {
      let todo = {key: user, label: users[user].label, complete: users[user].complete}
      storedTodos.push(todo);
    }
    todos = storedTodos;
    this.setState({ todos, todo: '' })
  })
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
    if (!this.state.todo) {
      return;
    };
    let firebaseRef = firebase.database().ref();
    let newTodo = this.todoConstructor(this.state.todo);
    firebaseRef.child('todos').push(newTodo);
  }

  deleteTodo(key) {
    var adaRef = firebase.database().ref('todos');
    adaRef.child(key).remove()
    .then(function() {
      console.log("Remove succeeded.")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
  }

  toggleComplete(key, isComplete) {
    let newStatus = isComplete ? false : true;
    var adaRef = firebase.database().ref('todos');
    adaRef.child(key).update({complete: newStatus})
    .then(function() {
      console.log("Update succeeded.")
    })
    .catch(function(error) {
      console.log("Update failed: " + error.message)
    });
  }

  render() {
    return (
      <TodoListContainer>
        <TodoInput
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state.todo}
        />
        <hr/>
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleComplete={this.toggleComplete}
        />
      </TodoListContainer>
    );
  }
}

export default App;
