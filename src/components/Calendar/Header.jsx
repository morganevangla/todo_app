import React from 'react';
import '../../css/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'moment/locale/fr'  // without this line it didn't work
import moment from 'moment';

export default function CalendarHeader(props) {

    function currentYear() {
        return props.value.format('YYYY')
    }

    function startDate() {
        return props.value.clone().startOf("week").format('D')
    }

    function endDate() {
        return props.value.clone().endOf('week').format('D')
    }

    function currentMonth() {
        return props.value.format('MMMM')
    }


    function prevWeek() {
        return props.value.clone().subtract(1, "week");
    }

    function nextWeek() {
        return props.value.clone().add(1, "week");
    }

    console.log( props.value.clone().startOf('isoWeek').format('DD'))

    return (
            <div className="card-header" id='card--container'>
                <div className='previous' onClick={() => props.setValue(prevWeek())}>
                    <FontAwesomeIcon className='arrow-icons previous' size="lg" icon={faCircleArrowLeft} />
                </div>
                <div className='current'>
                   du {startDate()} au {endDate()} {currentMonth()} {currentYear()}
                </div>
                <div className='next' onClick={() => props.setValue(nextWeek())}>
                    <FontAwesomeIcon className='arrow-icons next' size="lg" icon={faCircleArrowRight} />
                </div>
            </div>
    )

}