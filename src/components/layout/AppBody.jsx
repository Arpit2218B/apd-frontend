import { Avatar } from '@material-ui/core';
import { Add, BarChartOutlined, ChevronLeftOutlined, ChevronRightOutlined, DashboardOutlined, ExitToAppOutlined, PlaylistAddCheckOutlined, SearchOutlined, SettingsOutlined, SubjectOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import NavItems from './NavLinks';
import './AppBody.scss'
import Header from './Header';
import Sidebar from './Sidebar';

const sidebarStyle = {
    width: "5vw"
}

const AppBody = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="appBody">
            <div style={collapsed ? sidebarStyle : null} className="sidebar">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>
            <div className="body">
                <Header />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppBody;