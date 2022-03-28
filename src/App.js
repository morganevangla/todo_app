import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { TodoList } from './components/TodoList';
import 'bootswatch/dist/minty/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      todoList: []
  }
    this.addNewAction = this.addNewAction.bind(this)
}

  addNewAction(value) {
    console.log(`Action ajoutée ${value} !`);
    // let newList = [];
    // newList.push(value)
    // console.log(newList)
    // this.setState({todoList: newList})
    this.setState(previousState => ({
      todoList: [...previousState.todoList, value]
  }));
  }
  render() {
    console.log(this.state.todoList)
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
