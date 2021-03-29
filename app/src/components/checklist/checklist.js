import React, { useEffect, useState } from 'react';
import { getUsers } from '../../data/services/users';

const Checklist = () => {

    const [users, setUsers] = useState([]);

    // const updateUsers = () => {
    //     getUsers();
    // }

    const rows = () => {
        // updateUsers().then((value) => {
        //     setUsers(value.users);
        //     users.map(data => {
        //         console.log(data.name);
        //     });
        // });
        
        
    }

    useEffect(() => {
        // getUsers();
    },[]);

    
    // console.log(users);

    return (
        <div className='checklist'>
            <div className='checklist__headers'>
                <div className='checklist__head'>Name</div>
                <div className='checklist__head'>Start Day</div>
                <div className='checklist__head'>Days Taken</div>
                <div className='checklist__head'>Remaining days</div>
                <div className='checklist__head'>Options</div>
            </div>
            <div className='checklist__rows'>
                <div className='checklist__row'>
                    <div className='name'>Rafael Monroy</div>
                    <div className='start-day'>2021-18-01</div>
                    <div className='days-taken'>1</div>
                    <div className='remaning-days'>5</div>
                    <div className='options'><a href='#'>Edit</a> <a href='#'>Request</a> <a href='#'>Detail</a></div>
                </div>
                <div className='checklist__row'>
                    <div className='name'>Erick Espinosa</div>
                    <div className='start-day'>2020-15-06</div>
                    <div className='days-taken'>4</div>
                    <div className='remaning-days'>6</div>
                    <div className='options'><a href='#'>Edit</a> <a href='#'>Request</a> <a href='#'>Detail</a></div>
                </div>
            </div>
        </div>
    )

};

export default Checklist;