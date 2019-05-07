import React from 'react';
import './Button.css';

const CalcContainer = props => {
    return (
        <div className ={`calc-container`}>{props.children}</div>
    );
};

export default CalcContainer;