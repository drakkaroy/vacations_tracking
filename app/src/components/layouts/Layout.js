import React, { useState } from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import Checklist from '../checklist/checklist';
import Moment from 'react-moment';
import Detail from '../detail/detail'

const Layout = () => {
    const currentDay = Date.now();
    const [view, setView] = useState(true);
    const [userDetail, setUserDetail] = useState({});

    const updateView = () => {
        setView(!view);
    }

    const updateUserDetails = (id) => {
        setUserDetail(id);
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className='title'>
                    <h1>Vacations Tracking</h1>
                    <div className='title__day'>Date: <Moment format="DD MMM YYYY">{currentDay}</Moment></div>
                </div>
                {view ? <Checklist updateView={updateView} updateUserDetails={updateUserDetails} /> :
                    <Detail updateView={updateView} userId={userDetail} />}
            </div>
            <Footer />
        </>
    );
}

export default Layout;