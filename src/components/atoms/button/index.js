import React from 'react';
import './index.css';

export const Button = ({ children, type = 'submit'}) => (
    <button type={type}>{children}</button>
);