import { Add, BarChartOutlined, ChevronLeftOutlined, ChevronRightOutlined, DashboardOutlined, PlaylistAddCheckOutlined, SettingsOutlined, SubjectOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import NavItems from './NavLinks';

const iconStyle = {
    "justifyContent": "center"
}

const sidebarStyle = {
    width: "5vw"
}

const Sidebar = () => {
    
    const [ collapsed, setCollapsed ] = useState(false);

    return (
        <div style={collapsed ? sidebarStyle : null} className="sidebar">
            <div className="top">
                <div className="logo">
                    <h2>APD</h2>
                </div>
                <div className="addTask">
                    <NavItems 
                        type="button" 
                        content="Add task" 
                        icon={<Add />} 
                        collapsed={collapsed} 
                    />
                </div>
                <div className="topnav">
                    <NavItems 
                        type="link" 
                        content="Dashboard" 
                        icon={<DashboardOutlined />} 
                        collapsed={collapsed} 
                    />
                    <NavItems 
                        type="link" 
                        content="Current Tasks" 
                        icon={<SubjectOutlined />} 
                        collapsed={collapsed} 
                    />
                    <NavItems 
                        type="link" 
                        content="Completed Tasks" 
                        icon={<PlaylistAddCheckOutlined />} 
                        collapsed={collapsed} 
                    />
                    <NavItems 
                        type="link" 
                        content="Reports" 
                        icon={<BarChartOutlined />} 
                        collapsed={collapsed} 
                    />
                </div>
            </div>
            <div className="bottom">
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