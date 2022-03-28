import moment from 'moment';
import React, { useState, useEffect } from 'react';
import '../css/Calendar.css';


export default function Calendar() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const a = [];
        while (day.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone())
            )
        }
    
        setCalendar(a);
    }, [value])

    return (
        <div className="calendar--container">
            {
                calendar.map(week => <div>
                    {
                       week.map(day => <div className='day'>
                           {
                               day.format("D").toString()
                           }
                       </div>) 
                    }
                </div>)
            }
        </div>
    )

}