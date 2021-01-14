import { Avatar } from '@material-ui/core';
import { Add, BarChartOutlined, ChevronLeftOutlined, ChevronRightOutlined, DashboardOutlined, ExitToAppOutlined, PlaylistAddCheckOutlined, SearchOutlined, SettingsOutlined, SubjectOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import './AppBody.scss'

const sidebarStyle = {
    width: "5vw"
}

const iconStyle = {
    "justifyContent": "center"
}

const buttonStyle = {
    "border": "none",
    "padding": 0
}

const AppBody = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false)

    const collapseSidebar = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="appBody">
            <div style={collapsed ? sidebarStyle : null} className="sidebar">
                <div className="top">
                    <div className="logo">
                        <h2>APD</h2>
                    </div>
                    <div className="addTask">
                        <button style={collapsed ? buttonStyle : null}><Add /> {collapsed ? null : "Add task"}</button>
                    </div>
                    <div className="topnav">
                        <span className="links" style={collapsed ? iconStyle : null}>
                            <DashboardOutlined />
                            <span>{collapsed ? null : "Dashboard"}</span>
                        </span>
                        <span className="links" style={collapsed ? iconStyle : null}>
                            <SubjectOutlined />
                            <span>{collapsed ? null : "Current Tasks"}</span>
                        </span>
                        <span className="links" style={collapsed ? iconStyle : null}>
                            <PlaylistAddCheckOutlined />
                            <span>{collapsed ? null : "Completed Tasks"}</span>
                        </span>
                        <span className="links" style={collapsed ? iconStyle : null}>
                            <BarChartOutlined />
                            <span>{collapsed ? null : "Reports"}</span>
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <span className="links" style={collapsed ? iconStyle : null}>
                        <SettingsOutlined/ >
                        <span>{collapsed ? null : "Settings"}</span>
                    </span>
                    <span onClick={collapseSidebar} className="links collapse" style={collapsed ? iconStyle : null}>
                        {collapsed ? (<ChevronRightOutlined />) : (<ChevronLeftOutlined />)}
                        <span>{collapsed ? null : "Collapse"}</span>
                    </span>
                </div>
            </div>
            <div className="body">
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
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppBody;