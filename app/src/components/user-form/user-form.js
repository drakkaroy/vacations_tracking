import React, { useState, useEffect } from 'react';
import { userRequest } from '../../data/services/users';
import DatePicker from "react-datepicker";
import moment from 'moment';
import Input from '../input/input';

const UserForm = (props) => {

    const { placeholderData, requestType } = props;

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [startDay, setStartDay] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [datePickerClass, setDatePickerClass] = useState('form__input');
    // handleSubmitStatus is a flag to the post request = stoped || sending 
    const [handleSubmitStatus, setHandleSubmitStatus] = useState('stoped');
    // handleInputStatus is to validade the input status = empty || filled
    const [handleInputStatus, setHandleInputStatus] = useState('filled');
    const [userData, setUserData] = useState({
        user: '',
        email: '',
        id_number: '',
        phone_number: '',
        start_day: ''
    });

    const handleOnChange = (event, onHandleFn) => {
        onHandleFn;
        //console.log(event);
        setHandleInputStatus('filled');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setHandleInputStatus('empty');
        let date = validateDate(startDay);
        if (user && email && idNumber && phoneNumber && date) {
            setHandleSubmitStatus('sending');
            setUserData({
                user,
                email,
                id_number: idNumber,
                phone_number: phoneNumber,
                start_day: startDay
            });
        }
    }

    const updateDate = (date) => {
        const momentDate = moment(date);
        setStartDate(date);
        setStartDay(momentDate.format('YYYY-MM-DD'));
        setDatePickerClass('form__input');
    }

    const validateDate = (date) => {
        let momentDate = moment(date);
        if (momentDate.isValid() && date !== '') {
            return true;
        } else {
            setDatePickerClass('form__input form__empty');
            return false;
        }
    }

    const saveData = async () => {
        switch (requestType) {
            case 'post':
                await userRequest({ method: 'POST', body: userData });
                break;
            case 'put':
                await userRequest({ id: placeholderData.id, method: 'PUT', body: userData });
            default:
                break;
        }
        setHandleSubmitStatus('stoped');
        window.location.reload();
    }

    useEffect(() => {
        if (placeholderData) {
            const { user, email, id_number, phone_number, start_day } = placeholderData;
            setUser(user);
            setEmail(email);
            setIdNumber(id_number);
            setPhoneNumber(phone_number);
            setStartDay(start_day);
        }
    }, []);

    useEffect(() => {
        if (handleSubmitStatus === 'sending') saveData();
    }, [userData]);

    return (
        <div className='table-form'>
            <form onSubmit={handleSubmit}>
                <div className='table'>
                    <div className='table__headers'>
                        <div className='table__header'>Add User</div>
                    </div>
                    <div className='table__rows'>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <label htmlFor='user' className='form__label'>Name</label>
                                    <Input
                                        id='user'
                                        name='user'
                                        value={user}
                                        onChange={event => handleOnChange(event, setUser(event.target.value))}
                                        handleInputStatus={handleInputStatus}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <label htmlFor='email' className='form__label'>Email</label>
                                    <Input
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={event => handleOnChange(event, setEmail(event.target.value))}
                                        handleInputStatus={handleInputStatus} />
                                </div>
                            </div>
                        </div>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <label htmlFor='idNumber' className='form__label'>Id Number</label>
                                    <Input
                                        id='idNumber'
                                        name='id_number'
                                        value={idNumber}
                                        onChange={event => handleOnChange(event, setIdNumber(event.target.value))}
                                        handleInputStatus={handleInputStatus} />
                                </div>
                            </div>
                        </div>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <label htmlFor='phoneNumber' className='form__label'>Phone Number</label>
                                    <Input
                                        id='phoneNumber'
                                        name='phone_number'
                                        value={phoneNumber}
                                        onChange={event => handleOnChange(event, setPhoneNumber(event.target.value))}
                                        handleInputStatus={handleInputStatus} />
                                </div>
                            </div>
                        </div>
                        <div className='table__row'>
                            <div className='table__col'>
                                <div className='form__row'>
                                    <label htmlFor='startDay' className='form__label'>Start Day</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => updateDate(date)}
                                        className={datePickerClass}
                                        dateFormat="yyyy/MM/dd" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table-form__submit'>
                    <input className='btn btn--green' type='submit' value='Submit'></input>
                </div>
            </form>
        </div>
    )
}

export default UserForm;