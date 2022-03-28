import moment from 'moment';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../css/TodoList.css';
import Calendar from './Calendar';

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          todoList: []
      }
    }
    
    

    render() {
        let { list } = this.props.todoList
        return (
            <div className='list--container'>
                <Container>
                <div className="card border-primary mb-3" style={{maxWidth: '100%', marginTop: '50px'}}>
                    <div className="card-header">Calendrier</div>
                    <div className="card-body">

                        <ul className='TodoList--list'>
                            {

                                this.props.todoList && this.props.todoList.length >= 0 ?

                                    this.props.todoList.map((todo, key) => {
                                        console.log(todo, key, 'todo in todolist component')
                                        return <li key={key}>{todo}</li>
                                    })

                                    : null
                            }
                        </ul>
                        <Calendar />
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export { TodoList };