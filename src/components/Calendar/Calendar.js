import moment from 'moment';
import React, { useState, useEffect } from 'react';
import '../../css/Calendar.css';
import buildCalendar from './build';
import dayStyles from './styles';
export default function Calendar(props) {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
        props.currentDate(value);
    }, [value]);

    return (
        <div className="calendar--container">
            {
                calendar.map(week => <div key={week}>
                    {
                        week.map(day => (
                            <div
                                className='day'
                                onClick={() => setValue(day)}
                            >
                                <div
                                key={day}
                                className={dayStyles(day, value)}
                                >
                                    {day.format("D").toString()}
                                </div>

                            </div>))
                    }
                </div>)
            }
        </div>
    )

}