import { Add, BarChartOutlined, ChevronLeftOutlined, ChevronRightOutlined, DashboardOutlined, PlaylistAddCheckOutlined, SettingsOutlined, SubjectOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <Tasks editable={true}>
                        <NavItems 
                            type="button" 
                            content="Create task" 
                            icon={<Add />} 
                            collapsed={collapsed} 
                        />
                    </Tasks>
                </div>
                <div className="topnav">
                    <NavLink to="/app/dashboard" activeClassName="selected">
                        <NavItems 
                            type="link" 
                            content="Dashboard" 
                            icon={<DashboardOutlined />} 
                            collapsed={collapsed}
                        />
                    </NavLink>
                    <NavLink to="/app/current" activeClassName="selected">
                        <NavItems 
                            type="link" 
                            content="Current Tasks" 
                            icon={<SubjectOutlined />} 
                            collapsed={collapsed}
                        />
                    </NavLink>
                    <NavLink to="/app/completed" activeClassName="selected">
                        <NavItems 
                            type="link" 
                            content="Completed Tasks" 
                            icon={<PlaylistAddCheckOutlined />} 
                            collapsed={collapsed}
                        />
                    </NavLink>
                    <NavLink to="/app/reports" activeClassName="selected">
                        <NavItems 
                            type="link" 
                            content="Reports" 
                            icon={<BarChartOutlined />} 
                            collapsed={collapsed}
                        />
                    </NavLink>
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