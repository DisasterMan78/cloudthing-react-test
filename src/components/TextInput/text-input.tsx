import React from 'react';

import styled from '@emotion/styled';

import language from '../../language/language.json';


type ErrorMessagesType = {
  [key: string]: string;
}

type TextInputProps = {
  name: string;
  label: string;
  errors: ErrorMessagesType;
  tabIndex: number;
  value: string;
  type: string;
  handleOnChange: any;
}

const errorColour = '#e74843',
      Wrapper = styled.div(`
        width: 90%;
        margin-top: 2rem;
        margin-left: 5%;
        @media (min-width: 360px) {
          width: auto;
          margin-top: 2rem;
          margin-left: 0;
        }
        text-align: left;
        &:first-of-type{
          margin-top:3rem;
        }
        &.input-invalid {
          & input {
            border-color: ${errorColour};
          }
          & .input-error: after {
            position: absolute;
            content: "!";
            right: 1rem;
            top: -2.5rem;
            width: 1rem;
            height: 1rem;
            color: #fff;
            background-color: ${errorColour};
            border-radius: 0.5rem;
            text-align: center;
            font-size: 0.7rem;
            line-height: 1.25rem;
          }
        }
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
      Error = styled.div(`
        position: relative;
        height: 0.75rem;
        padding-top: 0.5rem;
        color:#fff;
        font-size: 0.7rem;
        letter-spacing: 0.034rem;
      `),
      TextInput = ({ name, label, tabIndex, errors, value, type, handleOnChange } : TextInputProps) => {

        const errorMessages: ErrorMessagesType = language.errors,
              onChange = (event: React.FormEvent<HTMLInputElement>) => {
                handleOnChange(event);
              };

        return (
          <Wrapper
            className={ (errors && errors[name]) ? 'input-invalid input-wrapper' : 'input-wrapper' }
            key={`${name}-wrapper`}
          >
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              name={name}
              type={type}
              defaultValue={value}
              key={`${name}-input`}
              /* This is nor readable code. See explanation below */
              {...(tabIndex ? { tabIndex } : {})}
              onChange={onChange}
            />
            <Error className="input-error">{ (errors) ? errorMessages[errors[name]] : '' }</Error>
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
<Error /> component also uses ternary operator
*/

TextInput.defaultProps = {
  tabIndex: false,
  error: false,
  type: 'text',
}

export default TextInput;
