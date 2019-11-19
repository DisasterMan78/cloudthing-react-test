import React from 'react';

type TextInputProps = {
  name: string;
  label: string;
  tabIndex: number;
}

const TextInput = ({ name, label, tabIndex }: TextInputProps) => {

  return (
    <span className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        {...(tabIndex ? { tabIndex } : {})}
      />
    </span>
  );
};

TextInput.defaultProps = {
  tabIndex: false,
}

export default TextInput;
