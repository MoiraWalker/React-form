import React from 'react';
import './index.css';

export const Label = ({children, name}) => (
    <label
    className='label'
    htmlFor={name}>
        {children}
    </label>
);