import React from 'react';
import '../../styles/components/Dashboard.scss';

const OverviewCard = ({label, value, type}) => {
    return (
        <div className={`overview__container ${type}`}>
            <div className={`clip ${type}`}></div>
            <h4>{label}</h4>
            <h2>{value}</h2>
        </div>
    )
}

export default OverviewCard;