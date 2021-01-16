import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERTS } from '../../dataStore/actionConstants';
import '../../styles/components/AppBody.scss'
import Alert from '../common/Alerts';
import Dropdown from '../common/Dropdown';
import Header from './Header';
import Sidebar from './Sidebar';

const AppBody = ({ children }) => {

    const dispatch = useDispatch();

    const errorOut = () => {
        dispatch({
            type: ALERTS.SET_ALERT,
            payload: {
                isSet: true,
                type: 'error',
                content: 'Error' 
            }
        })
    }

    const warnOut = () => {
        dispatch({
            type: ALERTS.SET_ALERT,
            payload: {
                isSet: true,
                type: 'warning',
                content: 'Warning' 
            }
        })
    }

    const messageOut = () => {
        dispatch({
            type: ALERTS.SET_ALERT,
            payload: {
                isSet: true,
                type: 'success',
                content: 'Success' 
            }
        })
    }

    const counter = useRef(1);

    useEffect(() => {
        counter.current++;
    })
    
    return (
        <div className="appBody">
            <Sidebar />
            <div className="body">
                <Header />
                <div className="content">
                    <Alert />
                    {children}
                </div>
                <button onClick={errorOut} >Error</button>
                <button onClick={warnOut} >Warning</button>
                <button onClick={messageOut} >Success</button>
                {counter.current}
                <Dropdown  options={['Last 10 days', 'Last week', 'Last month']} changeHandler={(e) => alert(e.target.value)} />
                <Dropdown  options={[10, 20, 30, 40]} changeHandler={(e) => alert(e.target.value * 10)} />
            </div>
        </div>
    )
}

export default AppBody;