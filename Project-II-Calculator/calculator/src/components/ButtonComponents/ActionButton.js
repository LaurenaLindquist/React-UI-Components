import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={`big-button ${props.classname}`}>{props.text}</button>
    );
};

export default ActionButton;
