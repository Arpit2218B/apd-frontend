import React from 'react';
import './CompletedPage.scss';

const CompletedTile = () => {
    return (
        <div className="completed__tile">
            <div className="completedTile__top default">01 Jan 2021</div>
            <div className="completedTile__middle">
                <h3>Buy new gardening pipe Buy new gardening pipe</h3>
            </div>
            <div className="completedTile__bottom">
                <span className="default thanklessTask">Thankless task</span>
                <span className="default">Personal</span>
            </div>
        </div>
    )
}

export default CompletedTile;