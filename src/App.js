import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  id = 3;

  state = {
    todos:[
      {
        id:0,
        text: 'js 배우고',
        checked: true
      },
      {
        id:1,
        text: 'React 배우고',
        checked: false
      },
      {
        id:2,
        text: 'Nodejs 배우고',
        checked: false
      }
    ]
  };
  handleCreate = text => {
    const todoData = {
      id : this.id++,
      text,
      checked: false
    };
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐하지?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate}/>
        <div className="White-box">
          <TodoList todos={this.state.todos}/>
        </div> 
      </div>
    );
  }
}

export default App;
