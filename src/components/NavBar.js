import moment from 'moment';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../css/NavBar.css';
import buildCalendar from './Calendar/build';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: null,
            today: false,
            week: false
        };
    
        this.handleChangeDays = this.handleChangeDays.bind(this);
      }
    handleChangeAction = e => {
        e.preventDefault();
        this.setState({ task: e.target.value })
    }

    handleChangeDays = e => {
        // e.preventDefault();
        const target = e.target;
        const checked = target.checked;
        const name = target.name;
        let selectedDate = null
        if (checked) {
            if (name === 'today') {
                selectedDate = [moment().startOf('day')];
                // checked = true
            } else if (name === 'week') {
                selectedDate = buildCalendar(moment())[0]
                // checked = true
            }
        } else {
            selectedDate = null
            // checked = false
        }
        console.log(checked)
        this.setState({ date: selectedDate, [name]: checked})
    }

    render() {
        const { task, date } = this.state
        return (
            <div className='NavBar--container'>
                <div>
                    <h4>Ma liste de choses à faire</h4>
                </div>
                <div className='NavBar'>
                <Form>
                    <input className='NavBar--input'
                        type='text'
                        placeholder='Ajouter une action'
                        value={task}
                        onChange={this.handleChangeAction}
                    />
                    <div>
                                <div key={`date--choices`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`today`}
                                        label={`Aujourd'hui`}
                                        name={'today'}
                                        checked={this.state.today}
                                        onChange={this.handleChangeDays}
                                    />
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`week`}
                                        label={`du lundi au vendredi`}
                                        checked={this.state.week}
                                        name={'week'}
                                        onChange={this.handleChangeDays}
                                    />
                                </div>
                    </div>
                    </Form>
                    <div
                        className='NavBar--submit'
                    >
                        <button onClick={() => this.props.addNewAction(task, date)} type="button" className="btn btn-primary">Click</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { NavBar };