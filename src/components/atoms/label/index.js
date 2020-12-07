import React from 'react';

export const Label = ({children, name, classStyle}) => (
    <label
    className={classStyle}
    htmlFor={name}>
        {children}
    </label>
);