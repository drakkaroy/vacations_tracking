import React, { useEffect, useState } from 'react';
import { userRequest } from '../../data/services/users';
import Moment from 'react-moment';
import moment from 'moment';
import UserForm from '../user-form/user-form';
import DayForm from '../day-form/day-form';

const Dashboard = (props) => {
    const { updateView, updateUserDetails } = props;
    const [users, setUsers] = useState([]);
    const currentDay = Date.now();

    const [view, setView] = useState('dashboard');

    const showDetail = (event) => {
        const id = event.target.dataset.id;
        updateView();
        updateUserDetails(id);
    }

    const fetchUsers = async () => {
        const users = await userRequest();
        setUsers(users);
    }

    const List = () => {
        return users.length > 0 && users.map(item => {
            const daysTaken = item.vacations_taken.length;
            const totalVacationDays = moment(currentDay).diff(moment(item.start_day), 'months');
            const remaningDays = totalVacationDays - daysTaken;
            return (
                <div className='table__row' key={item.id}>
                    <div className='table__col'>{item.user}</div>
                    <div className='table__col'>
                        <Moment format="DD MMM YYYY">{item.start_day}</Moment>
                    </div>
                    <div className='table__col'>{daysTaken}</div>
                    <div className='table__col'>{remaningDays}</div>
                    <div className='table__col'>
                        <button className='link' data-id={item.id} onClick={showDetail}>Detail</button>
                    </div>
                </div>
            )
        })
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {
                view === 'dashboard' ? (
                    <div className='dashboard'>
                        <div><button className='link' onClick={() => setView('userForm')}>Create a new user</button></div>
                        <div className='table'>
                            <div className='table__headers'>
                                <div className='table__header'>Name</div>
                                <div className='table__header'>Start Day</div>
                                <div className='table__header'>Days Taken</div>
                                <div className='table__header'>Remaining days</div>
                                <div className='table__header'>Options</div>
                            </div>
                            <div className='table__rows'>
                                <List />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div><button className='link' onClick={() => setView('dashboard')}>Dashboard</button></div>
                        <UserForm requestType='post' />
                    </>
                )
            }
        </>
    )

};

export default Dashboard;