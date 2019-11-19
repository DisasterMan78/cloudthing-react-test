import React from 'react';

type TextInputProps = {
  name: string;
  label: string;
}

const TextInput = ({ name, label }: TextInputProps) => {

  return (
    <span className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" />
    </span>
  );
};

export default TextInput;
