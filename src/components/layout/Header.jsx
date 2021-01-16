import { Avatar } from '@material-ui/core';
import { ExitToAppOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="search">
                <div className="searchbox">
                    <SearchOutlined />
                    <input placeholder="Search for tasks, lists etc."></input>
                </div>
            </div>
            <div className="profile">
                <Avatar alt="Arpit" src="/static/images/avatar/1.jpg" />
                <p>Arpit Rathi</p>
                <ExitToAppOutlined className="logout"/>
            </div>
        </div>
    )
}

export default Header;