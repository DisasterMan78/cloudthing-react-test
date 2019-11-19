import React from 'react';

type TextInputProps = {
  name: string;
}

const TextInput = ({ name }: TextInputProps) => {

  return (
    <span className="input-wrapper">
      <input id={name} type="text" />
    </span>
  );
};

export default TextInput;
