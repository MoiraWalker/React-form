import React from 'react';

export const Input = (type, name, id, fieldRef, value) => (
    <input
        type={type}
        name={name}
        id={id || name}
        ref={fieldRef}
        value={value}
    />
);