import React, { useEffect, useState } from 'react';

const Input = (props) => {

    const { id, name, value, onChange, handleInputStatus } = props;
    const [inputState, setInputState] = useState('filled');

    const validateField = () => {
        if (value === '') {
            setInputState('empty');
        } else {
            setInputState('filled');
        }
    }

    //console.log(handleSubmitStatus);

    useEffect(() => {
        if (handleInputStatus === 'empty') validateField();
    }, [handleInputStatus]);

    return (
        <input type='text'
            id={id}
            className={`form__input ${inputState === 'empty' ? 'form__empty' : ''}`}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={validateField}></input>
    )
}

export default Input;