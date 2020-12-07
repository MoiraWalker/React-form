import React from 'react';
import { Label, ErrorMessage } from "../../atoms";

export const TextArea = ({name, fieldRef, value, classStyle, label }) => {
  return (
      <div>
          <Label name={name} classStyle={classStyle}>{label}</Label>
          <textarea ref={fieldRef} id={name} name={name} />
      </div>
  );
};