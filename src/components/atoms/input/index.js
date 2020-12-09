import React from 'react';
import './index.css';

export const Input = (type, name, id, fieldref, value) => (
    <input
        className="input"
        type={type}
        name={name}
        id={id || name}
        ref={fieldref}
        value={value}
    />
);