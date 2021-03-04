import { Add, BarChartOutlined, ChevronLeftOutlined, ChevronRightOutlined, DashboardOutlined, PlaylistAddCheckOutlined, SettingsOutlined, SubjectOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tasks from '../common/Tasks';
import NavItems from './NavLinks';

const iconStyle = {
    "justifyContent": "center"
}

const sidebarStyle = {
    width: "5vw"
}

const sidebarStyleNormal = {
    "min-width": "11vw"
}

const Sidebar = () => {
    
    const [ collapsed, setCollapsed ] = useState(false);

    return (
        <div style={collapsed ? sidebarStyle : sidebarStyleNormal} className="sidebar">
            <div className="top">
                <div className="logo">
                    <h2>APD</h2>
                </div>
                <div className="addTask">
                    <Tasks>
                        <NavItems 
                            type="button" 
                            content="Create task" 
                            icon={<Add />} 
                            collapsed={collapsed} 
                        />
                    </Tasks>
                </div>
                <div className="topnav">
                    <Link to="/app/dashboard">
                        <NavItems 
                            type="link" 
                            content="Dashboard" 
                            icon={<DashboardOutlined />} 
                            collapsed={collapsed} 
                        />
                    </Link>
                    <Link to="/app/current">
                        <NavItems 
                            type="link" 
                            content="Current Tasks" 
                            icon={<SubjectOutlined />} 
                            collapsed={collapsed} 
                        />
                    </Link>
                    <Link to="/app/completed">
                        <NavItems 
                            type="link" 
                            content="Completed Tasks" 
                            icon={<PlaylistAddCheckOutlined />} 
                            collapsed={collapsed} 
                        />
                    </Link>
                    <Link to="/app/reports">
                        <NavItems 
                            type="link" 
                            content="Reports" 
                            icon={<BarChartOutlined />} 
                            collapsed={collapsed} 
                        />
                    </Link>
                </div>
            </div>
            <div className="bottom">
                <hr className="separator"/>
                <NavItems 
                    type="link" 
                    content="Settings" 
                    icon={<SettingsOutlined />} 
                    collapsed={collapsed} 
                />
                <span onClick={() => setCollapsed(!collapsed)} className="links collapse" style={collapsed ? iconStyle : null}>
                    {collapsed ? (<ChevronRightOutlined />) : (<ChevronLeftOutlined />)}
                    <span>{collapsed ? null : "Collapse"}</span>
                </span>
            </div>
        </div>
    )
}

export default Sidebar;