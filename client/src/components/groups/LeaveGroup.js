import React from 'react';

const LeaveGroup = ({ message, buttonLightTitle, buttonLightOnClick, buttonDangerTitle, buttonDangerOnClick }) => {

    return (
        <div className='leave-group'>
            <p className='leave-group__message'> { message } </p>
            <div className="leave-group__buttons">
                <button className='outline-btn leave-group__buttons--light'> { buttonLightTitle} </button>
                <button className='outline-btn leave-group__buttons--danger'> { buttonDangerTitle } </button>
            </div>
        </div>
    )
}

export default LeaveGroup;
