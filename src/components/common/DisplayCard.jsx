import React from 'react';
import '../../styles/components/DisplayCard.scss';

const DisplayCard = ({ header, children }) => {
    return (
        <div className="displayCard">
            <p className="displayCard__header">{header}</p>
            <div className="displayCard__content">
                {children}
            </div>
        </div>
    )
}

export default DisplayCard;