import moment from 'moment';
import React, { useState, useEffect } from 'react';

import '../../css/Calendar.css';
import buildCalendar from './build';
import dayStyles from './styles';
import 'moment/locale/fr'  // without this line it didn't work

import Header from './Header'

export default function Calendar(props) {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value, props.todoList]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        calendar ?
        (<div className="card border-primary mb-3" style={{ maxWidth: '100%', marginTop: '50px' }}>
            <Header value={value} setValue={setValue} />
            <div className="card-body">
                <ul className='TodoList--list'>
                    {

                        props.todoList && props.todoList.length >= 0 ?

                            props.todoList.map((todo, key) => {
                                return <li key={key}><button type="button" class="btn btn-outline-secondary">{todo}</button></li>
                            })

                            : null
                    }
                </ul>
                <div key={1} className="calendar--container">
                    {
                        calendar.map(week => <div key={week}>
                            {
                                // eslint-disable-line react-hooks/exhaustive-deps
                                week.map(day => (
                                    <div
                                        className='day'
                                        onClick={() => setValue(day)}
                                    >
                                        <div
                                            className={dayStyles(day, value)}
                                        >
                                            {day.format("D").toString()}
                                        </div>

                                    </div>))
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>)
        : null
    )

}