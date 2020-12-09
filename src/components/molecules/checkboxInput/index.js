import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage} from '../../atoms';
import './index.css';


export const CheckboxInput = ({label, name, id}) => {
    const { errors } = useFormContext();

    return (
      <div className="select-box">
          <input type="checkbox" name={name} id={id} />
          <label className="select-box-label" htmlFor={id} name={name}>{label}</label>
          {errors[name] && (
              <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>
          )}
      </div>
    );
};