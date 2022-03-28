import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../css/TodoList.css';
import Calendar from './Calendar/Calendar';

class TodoList extends Component {


     render() {
        let { todoList } = this.props;
        return (
            <div className='list--container'>
                <Container>
                        <Calendar todoList={todoList} />
                </Container>
            </div>
        )
    }
}

export { TodoList };