import { Check, Close, Error, WarningRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERTS } from '../../dataStore/actionConstants';
import '../../styles/components/Alerts.scss';

const Alert = () => {

    const notif = useSelector(state => state.alertReducer);
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

    if(!notif.isSet)
        return null;

    return (
        <div className="alerts">
            <Close onClick={closeAlert} className="alerts__close" />
            <div className="alerts__body">
                {notif.type == 'error' ? <Error className={notif.type} /> : (notif.type == 'warning' ? <WarningRounded className={notif.type} /> : <Check className={notif.type} />)}
                <p>{notif.content}</p>
            </div>
        </div>
    )
}

export default Alert;