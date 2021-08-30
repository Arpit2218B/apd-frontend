import React from 'react';
import OverviewCard from './overviewCards';
import TrendCard from './TrendCard';
import UpComingTasksCard from './UpcomingTasksCard';

const Dashboard = () => {
    return (
        <div className="dashboard__container">
            <div className="overviewSection">
                <OverviewCard label="Quick Wins" value="03" type="qw" />
                <OverviewCard label="Fill ins" value="05" type="fi" />
                <OverviewCard label="Major Projects" value="02" type="mp" />
                <OverviewCard label="Thankless Tasks" value="08" type="tt" />
            </div>
            <div className="dashboard__body">
                <UpComingTasksCard />
                <TrendCard />
            </div>
        </div>
    )
}

export default Dashboard;