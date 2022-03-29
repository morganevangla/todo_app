import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { TodoList } from './components/TodoList';
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      todoList: []
  }
    this.addNewAction = this.addNewAction.bind(this)
}

  addNewAction(value, date) {
    this.setState(previousState => ({
      todoList: [...previousState.todoList, {['task']: value, ['date']: date}]
  }));
  }
  render() {
  return (
    <div className="App">
      <div  className='TodoList--container'>
      <NavBar addNewAction={this.addNewAction} />
      <TodoList todoList={this.state.todoList} />
      </div>
    </div>
  );
  }
}

export default App;
