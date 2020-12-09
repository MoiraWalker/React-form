import React from 'react';
import { Label } from '../../atoms';
import './index.css';

export const SelectBox = ({ label, name, id,  fieldref, children }) => {
    return (
        <div>
            <Label name={name}>{label}</Label>
            <select
                name={name}
                id={id}
                fieldref={fieldref}
            >{children}</select>
        </div>
    );
};


