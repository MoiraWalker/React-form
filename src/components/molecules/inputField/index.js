import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Label, Input, ErrorMessage } from '../../atoms';
import './index.css';

export const InputField = ({ label, name, fieldref, type = 'text' }) => {
    const { errors } = useFormContext();
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input type={type} fielref={fieldref} name={name} />
            {errors[name] && (
                <ErrorMessage>{errors[name].message || 'Error'}</ErrorMessage>
            )}
        </div>
    );
};