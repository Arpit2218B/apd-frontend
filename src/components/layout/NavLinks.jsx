import React from 'react';

const iconStyle = {
    "justifyContent": "center"
}

const buttonStyle = {
    "border": "none",
    "padding": 0
}

const NavItems = ({type, content, icon, collapsed}) => {
    if (type == 'link') {
        return (
            <span className="links" style={collapsed ? iconStyle : null}>
                {icon}
                <span>{collapsed ? null : content}</span>
            </span>
        )
    }

    if (type == 'button') {
        return (
            <button style={collapsed ? buttonStyle : null}>{icon} {collapsed ? null : content}</button>
        )
    }
}

export default NavItems;