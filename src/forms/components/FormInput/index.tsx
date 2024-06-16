import React from 'react';
import { TextField, TextInputProps } from '../../../';
import { FormComponentProps } from '../../types';

interface ControllerItemProps {
  placeholder?: string;
  passwordMask?: boolean;
  textInputProps?: TextInputProps;
}

export const FormInput =
  ({ placeholder, passwordMask, textInputProps }: ControllerItemProps) =>
  // eslint-disable-next-line react/display-name
  ({ field: { onChange, value, onBlur } }: FormComponentProps) => {
    return (
      <TextField
        inputProps={{
          placeholder: placeholder,
          onChangeText: onChange,
          value: value,
          onBlur: onBlur,
          secureTextEntry: passwordMask,
          ...textInputProps,
        }}
      />
    );
  };

FormInput.displayName = 'FormInput'; // Add display name

export default FormInput; // Export the component
