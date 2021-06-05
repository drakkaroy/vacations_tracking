import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import axios from 'axios';

const DayForm = (props) => {
    const { user } = props;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [dates, setDates] = useState([]);
    const [description, setDescription] = useState('N/A');

    const updateDate = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        const enumerateDays = enumerateDaysBetweenDates(start, end);
        const inWeekDays = getInWeekDays(enumerateDays);
        setDates(inWeekDays);
    }

    const isWeekDay = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    }

    const getInWeekDays = dates => {
        const date = [];
        dates.forEach(el => {
            if (moment(el).day() !== 0 && moment(el).day() !== 6) {
                date.push(moment(el).format('YYYY-MM-DD'));
            }
        });
        return date;
    }

    const enumerateDaysBetweenDates = (startDate, endDate) => {

        const start = moment(startDate);
        // Add one day to the end day because a weird behavior
        const end = moment(endDate);

        let now = start;
        const dates = [];

        while (now.isBefore(end) || now.isSame(end)) {
            dates.push(now.format('YYYY-MM-DD'));
            now.add(1, 'days');
        }
        return dates;
    }

    const handleOnChange = (event, onHandleFn) => {
        onHandleFn;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dates);
        dates.forEach(elem => {

            const data = {
                user: user.id,
                day: elem,
                description: description
            }

            axios.post('http://127.0.0.1:8000/api/days/', data)
                .then(res => {
                    console.log(res);
                })
                .catch(error => console.error(error));
        })

    };

    return (
        <div className='table-form'>
            <form onSubmit={handleSubmit}>
                <div className='table'>
                    <div className='table__headers'>
                        <div className='table__header'>Days Request</div>
                    </div>
                    <div className='table__rows'>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={updateDate}
                                        startDate={startDate}
                                        endDate={endDate}
                                        selectsRange
                                        filterDate={isWeekDay}
                                        inline
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <label htmlFor='description' className='form__label'>Description</label>
                                    <textarea
                                        type='text'
                                        id='description'
                                        className='form__input'
                                        value={description}
                                        onChange={event => handleOnChange(event, setDescription(event.target.value))}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-form__submit'>
                    <button className='btn btn--green'>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default DayForm;