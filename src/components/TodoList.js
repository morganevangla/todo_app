import moment from 'moment';
import 'moment/locale/fr'  // without this line it didn't work
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../css/TodoList.css';
import Calendar from './Calendar/Calendar';

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          todoList: [],
          selectedDate: moment(),
          start:null,
          end:null

      }
      this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    handleChangeDate(value) {
        const locale = "fr";
        value = moment(value).locale(locale);
        const newStartDay = value.clone().startOf("month").startOf("week").format("DD MMMM");
        const newEndDay = value.clone().endOf("month").format("DD MMMM YYYY");
        this.setState({selectedDate: value, start: newStartDay, end: newEndDay})
    }
    
    

    render() {
        let { start, end } = this.state;
        return (
            <div className='list--container'>
                <Container>
                <div className="card border-primary mb-3" style={{maxWidth: '100%', marginTop: '50px'}}>
                    <div className="card-header">Calendrier</div>
                    <div className="card-title">du {start} au {end}</div>
                    <div className="card-body">

                        <ul className='TodoList--list'>
                            {

                                this.props.todoList && this.props.todoList.length >= 0 ?

                                    this.props.todoList.map((todo, key) => {
                                        return <li key={key}>{todo}</li>
                                    })

                                    : null
                            }
                        </ul>
                        <Calendar currentDate={this.handleChangeDate} />
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export { TodoList };