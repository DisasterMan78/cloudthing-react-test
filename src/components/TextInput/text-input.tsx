import React from 'react';

import styled from '@emotion/styled';
import { FieldError } from 'react-hook-form/dist/types';

import language from '../../language/language.json';

type ValidationType = {
  pattern?: any;
  required?: boolean;
}

type TextInputProps = {
  name: string;
  label: string;
  error: FieldError;
  validation: ValidationType;
  tabIndex: number;
  register: any;
  type: string;
}

type ErrorMessagesType = {
  [key: string]: string;
}

const TextInput = ({ name, label, tabIndex, error, register, validation, type } : TextInputProps) => {

  const errorColour = '#e74843',
        Wrapper = styled.div(`
          margin: 2rem 2rem 0;
          text-align: left;
          &:first-of-type{
            margin-top:3rem;
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
          &.input-invalid {
            border-color: ${errorColour};
            & + .input-error: after {
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
        Error = styled.div(`
          position: relative;
          height: 12px;
          padding-top: 0.5rem;
          color:#fff;
          font-size: 0.7rem;
          letter-spacing: 0.034rem;
        `),
        errorMessages: ErrorMessagesType = language.errors,
        renderError = (error: FieldError) => {
          let key: string = error.type;

          if (error.message) {
            key = error.message as string;
          }

          const message: string = errorMessages[key];

          if (error) {
            return message;
          }
        }

        return (
          <Wrapper className="input-wrapper">
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              name={name}
              type={type}
              /* This is nor readable code. See explanation below */
              {...(tabIndex ? { tabIndex } : {})}
              className={ (error) ? 'input-invalid' : '' }
              ref={register(validation)}
            />
            <Error className="input-error">{ renderError(error) }</Error>
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
  error: false,
  type: 'text',
}

export default TextInput;
