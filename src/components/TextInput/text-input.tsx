import React from 'react';

import styled from '@emotion/styled';

type TextInputProps = {
  name: string;
  label: string;
  tabIndex: number;
}

const Wrapper = styled.div(`
        margin: 3rem 2rem 0;
        text-align: left;
      `),
      Label = styled.label(`
        display: block;
        color: #fff;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
      `),
      Input = styled.input(`
        width: 100%;
        height: 4rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: #000;
        border: 1px solid #fff;
        border-radius: 4px;
        font-size: 1.1rem;
        letter-spacing: 0.05rem;
      `),
      TextInput = ({ name, label, tabIndex }: TextInputProps) => {

  return (
    <Wrapper className="input-wrapper">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="text"
        /* This is nor readable code. See explanation below */
        {...(tabIndex ? { tabIndex } : {})}
      />
    </Wrapper>
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
