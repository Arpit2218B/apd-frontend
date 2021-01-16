import { Check, Close, Error, WarningRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ALERTS } from '../../dataStore/actionConstants';
import '../../styles/components/Alerts.scss';

const Alert = ({ type, content }) => {

    const dispatch = useDispatch();

    const closeAlert = () => {
        dispatch({
            type: ALERTS.SET_ALERT,
            payload: {
                isSet: false,
                type: '',
                content: '' 
            }
        })
    }

    return (
        <div className="alerts">
            <Close onClick={closeAlert} className="alerts__close" />
            <div className="alerts__body">
                {type == 'error' ? <Error className={type} /> : (type == 'warning' ? <WarningRounded className={type} /> : <Check className={type} />)}
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Alert;