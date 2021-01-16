import React from 'react';
import '../../styles/components/Dropdown.scss';

const Dropdown = ({ options, changeHandler }) => {
    return (
        <select onChange={changeHandler} className="select">
            {options.map(option => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}

export default Dropdown;