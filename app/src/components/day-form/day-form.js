import React from 'react';

const DayForm = () => {

    return (
        <div className='user-form'>
            <div className='user-form__headers'>
                <div className='user-form__head'>Days Request</div>
            </div>
            <div className='user-form__rows'>
                <div className='user-form__row'>
                    <div className='form__row'>
                        <label htmlFor='days' className='form__label'>Days</label>
                        <input type='text' id='days' className='form__input'></input>
                    </div>
                </div>
                <div className='user-form__row'>
                    <div className='form__row'>
                        <label htmlFor='description' className='form__label'>Description</label>
                        <textarea type='text' id='description' className='form__input'></textarea>
                    </div>
                </div>
            </div>
            <div className='user-form__submit'>
                <button className='btn btn--green'>Submit</button>
            </div>
        </div>
    )

}

export default DayForm;