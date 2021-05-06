import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import UserForm from '../user-form/user-form';
import DayForm from '../day-form/day-form';

const Detail = (props) => {

    const { updateView, userId } = props;
    const [user, setUser] = useState({});
    const [view, setView] = useState('detail');
    const [deleteUserState, setDeleteUserState] = useState(false);
    const [showDeleteUserPopup, setShowDeleteUserPopup] = useState(false);

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

    const DetailView = () => {
        return (
            <>
                <div className='detail__headers'>
                    <div className='checklist__head'>Day Taken</div>
                    <div className='checklist__head'>Description</div>
                </div>
                <div className='detail_rows'>
                    <Rows />
                </div>
            </>
        );
    }

    const Content = () => {
        if (view === 'detail') {
            return <DetailView />
        } else if (view === 'vacation') {
            return <DayForm user={user} />
        } else {
            return <UserForm placeholderData={user} requestType='put' />
        }
    }

    const DeleteUserPopUp = () => {
        return (
            <div className='detail__popup'>
                <div>Are you sure you want to delete this instace?</div>
                <div>
                    <button className='btn btn--green' onClick={() => { setShowDeleteUserPopup(false) }}>Cancel</button>
                    <button className='btn btn--red' onClick={() => { setDeleteUserState(true) }}>Delete</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (deleteUserState) {
            // axios.delete(`http://127.0.0.1:8000/api/days/${user.id}/`);
            axios.delete(`http://127.0.0.1:8000/api/users/${user.id}/`);
            window.location.reload();
        }
    }, [deleteUserState])

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <>
            { showDeleteUserPopup && <DeleteUserPopUp />}
            <div className='detail'>
                <div className='detail__info'>
                    <div className='detail__name'>{user.user}</div>
                    <div className='detail__list'>
                        <div><span>Email: </span>{user.email}</div>
                        <div><span>Id Number: </span>{user.id_number}</div>
                        <div><span>Phone Number: </span>{user.phone_number}</div>
                        <div><span>Start Day: </span><Moment format="DD MMM YYYY">{user.start_day}</Moment></div>
                    </div>
                    <div className='detail__options'>
                        <button className='link' onClick={() => goBack()}>Dashboard</button>
                        <button className='link' onClick={() => setView('detail')}>Dates</button>
                        <button className='link' onClick={() => setView('edit')}>Edit user</button>
                        <button className='link' onClick={() => setShowDeleteUserPopup(true)}>Delete user</button>
                        <button className='link' onClick={() => setView('vacation')}>Request new date</button>
                    </div>
                </div>
                <Content />
            </div>

        </>
    )

}

export default Detail;