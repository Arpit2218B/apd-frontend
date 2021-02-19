import React from 'react';
import Dropdown from '../common/Dropdown';
import './CompletedPage.scss';
import CompletedTile from './CompletedTile';

const CompletedPage = () => {
    return (
        <div className="completed__container">
            <div className="completed__header">
                <h2>Completed Tasks</h2>
                <div>
                    <Dropdown options={['Last 10 days', 'Last week', 'Last month']} changeHandler={(e) => alert(e.target.value)} />
                    <Dropdown options={['Last 10 days', 'Last week', 'Last month']} changeHandler={(e) => alert(e.target.value)} />
                </div>
            </div>
            <div className="completed__grid">
                <CompletedTile />
                <CompletedTile />
                <CompletedTile />
                <CompletedTile />
                <CompletedTile />
                <CompletedTile />
                <CompletedTile />
                {/* <CompletedTile /> */}
                {/* <CompletedTile /> */}
            </div>
        </div>
    )
}

export default CompletedPage;