import React from 'react';
import { CheckboxInput, InputField, RadioInput, TextArea } from "../../molecules";
import { useForm, FormProvider } from 'react-hook-form';

export const PetForm = () => {
    const { register, unregister, watch, handleSubmit, ...methods } = useForm({
        mode: 'onChange'
    });
 return (
     <div>
         <InputField
             name="firstName"
             label="Voornaam"
             fieldRef={register({
                 required: {
                     value: true,
                     message: 'Voornaam is verplicht',
                 }
             })}
         />
     </div>
 );
}
