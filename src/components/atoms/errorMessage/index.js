import React from 'react';
import './index.css';

export const ErrorMessage = ({ children }) => (
    <p className="error-message">
        {children}
    </p>
)