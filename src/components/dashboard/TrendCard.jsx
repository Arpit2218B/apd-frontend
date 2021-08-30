import React from 'react';
import { Link } from 'react-router-dom';
import DisplayCard from '../common/DisplayCard';
import LineChart from './Chart';

const TrendCard = () => {
    return (
        <DisplayCard header="Trend">
            <div className="dashboard__body__container">
                <LineChart />
            </div>
            <Link to="/app/reports">
                <p className="allTasksLink">VIEW REPORTS</p>
            </Link>
        </DisplayCard>
    )
}

export default TrendCard;