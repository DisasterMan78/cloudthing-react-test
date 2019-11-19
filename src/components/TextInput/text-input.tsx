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
        /* This is nor readable code. See explanation below */
        {...(tabIndex ? { tabIndex } : {})}
      />
    </span>
  );
};

/*
Re: tabIndex prop
While concise and clever, that is not very intuitive code.
It uses a ternary operator [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator] and spread to conditionally render the attribute.

It is functionally equivalent to
  if (tabIndex) {
    {...tabIndex}
  }
*/

TextInput.defaultProps = {
  tabIndex: false,
}

export default TextInput;
