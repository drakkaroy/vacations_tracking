import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import UserForm from '../user-form/user-form';

const Detail = (props) => {

    const { updateView, userId } = props;
    const [user, setUser] = useState({});
    const [editView, setEditView] = useState(false)

    const goBack = () => {
        updateView();
    }

    const fetchUser = () => {
        axios.get(`http://127.0.0.1:8000/api/users/${userId}/`)
            .then(res => {
                setUser(res.data);
            });
    }

    const Rows = () => {
        const dates = user.vacations_taken || [];
        const rows = dates.map((item, index) => {
            return (
                <div className='detail__row' key={index}>
                    <div><Moment format="DD MMM YYYY">{item.day}</Moment></div>
                    <div>{item.description}</div>
                </div>
            )
        });
        return rows;
    }

    const updateEditView = () => {
        setEditView(!editView);
    }

    useEffect(() => {
        fetchUser();

    }, [])

    return (
        <>
            <div className='detail'>
                <div className='detail__info'>
                    <div className='detail__name'>{user.user} <button className='btn btn--green' onClick={updateEditView}>Edit</button></div>
                    <div className='detail__list'>
                        <div><span>Email: </span>{user.email}</div>
                        <div><span>Id Number: </span>{user.id_number}</div>
                        <div><span>Phone Number: </span>{user.phone_number}</div>
                        <div><span>Start Day: </span><Moment format="DD MMM YYYY">{user.start_day}</Moment></div>
                    </div>
                </div>
                <div className='detail__headers'>
                    <div className='checklist__head'>Day Taken</div>
                    <div className='checklist__head'>Description</div>
                </div>
                <div className='detail_rows'>
                    <Rows />
                </div>
                <div className='detail__back'>
                    <button className='btn btn--blue' onClick={goBack}>Back</button>
                </div>
            </div>
            {editView && <UserForm />}
        </>
    )

}

export default Detail;