import React, { useEffect, useState } from 'react';
//import { getUsers } from '../../data/services/users';
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';

const Checklist = (props) => {
    const { updateView, updateUserDetails } = props;
    const [users, setUsers] = useState([]);
    const currentDay = Date.now();

    const showDetail = (event) => {
        const id = event.target.dataset.id;
        updateView();
        updateUserDetails(id);
    }

    const fetchUsers = () => {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                setUsers(res.data);
            });
    }

    const List = () => {
        const dataList = users.map(item => {
            const daysTaken = item.vacations_taken.length;
            const totalVacationDays = moment(currentDay).diff(moment(item.start_day), 'months');
            const remaningDays = totalVacationDays - daysTaken;
            return (
                <div className='checklist__row' key={item.id}>
                    <div>{item.user}</div>
                    <div>
                        <Moment format="DD MMM YYYY">{item.start_day}</Moment>
                    </div>
                    <div>{daysTaken}</div>
                    <div>{remaningDays}</div>
                    <div className='checklist__options'>
                        <button className='btn btn--blue' data-id={item.id} onClick={showDetail}>Detail</button>
                        <button className='btn btn--green'>Request</button>
                        <button className='btn btn--green'>Edit</button>
                    </div>
                </div>
            )
        })
        return dataList;
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='checklist'>
            <div className='checklist__headers'>
                <div className='checklist__head'>Name</div>
                <div className='checklist__head'>Start Day</div>
                <div className='checklist__head'>Days Taken</div>
                <div className='checklist__head'>Remaining days</div>
                <div className='checklist__head'>Options</div>
            </div>
            <List />
        </div>
    )

};

export default Checklist;