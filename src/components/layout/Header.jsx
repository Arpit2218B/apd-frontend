import { Avatar } from '@material-ui/core';
import { ExitToAppOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from '../../dataStore/actionConstants';

const Header = () => {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        dispatch({
            type: USER.SET_USER,
            payload: null
        });
    }

    return (
        <div className="header">
            <div className="search">
                <div className="searchbox">
                    <SearchOutlined />
                    <input placeholder="Search for tasks, lists etc."></input>
                </div>
            </div>
            <div className="profile">
                <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                <p>{user.name}</p>
                <ExitToAppOutlined className="logout" onClick={handleLogout} />
            </div>
        </div>
    )
}

export default Header;