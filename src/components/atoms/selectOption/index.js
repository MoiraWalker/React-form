import React from 'react';
import './index.css';

export const SelectOption = ({children, value}) => (
    <option
        className="select-option"
        value={value}>
        {children}
    </option>
);