import React from 'react';
import '../../css/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'moment/locale/fr'  // without this line it didn't work

export default function CalendarHeader(props) {

    function currentYear() {
        return props.value.format('YYYY')
    }

    function currentMonth() {
        return props.value.format('MMMM')
    }


    function prevMonth() {
        return props.value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return props.value.clone().add(1, "month");
    }

    return (
            <div className="card-header" id='card--container'>
                <div className='previous' onClick={() => props.setValue(prevMonth())}>
                    <FontAwesomeIcon className='arrow-icons previous' size="lg" icon={faCircleArrowLeft} />
                </div>
                <div className='current'>
                    {currentMonth()} {currentYear()}
                </div>
                <div className='next' onClick={() => props.setValue(nextMonth())}>
                    <FontAwesomeIcon className='arrow-icons next' size="lg" icon={faCircleArrowRight} />
                </div>
            </div>
    )

}