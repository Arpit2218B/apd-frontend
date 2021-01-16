import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERTS } from '../../dataStore/actionConstants';
import '../../styles/components/AppBody.scss'
import Alert from '../common/Alerts';
import Header from './Header';
import Sidebar from './Sidebar';

const sidebarStyle = {
    width: "5vw"
}

const AppBody = ({ children }) => {

    const dispatch = useDispatch();
    const notif = useSelector(state => state.alertReducer);

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

    const [collapsed, setCollapsed] = useState(false);
    
    return (
        <div className="appBody">
            <div style={collapsed ? sidebarStyle : null} className="sidebar">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>
            <div className="body">
                <Header />
                <div className="content">
                    {notif.isSet ? <Alert type={notif.type} content={notif.content} /> : null}
                    {children}
                </div>
                <button onClick={errorOut} >Error</button>
                <button onClick={warnOut} >Warning</button>
                <button onClick={messageOut} >Success</button>
            </div>
        </div>
    )
}

export default AppBody;