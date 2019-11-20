import React, { useState } from 'react';
import useForm from './hooks/useForm';

import styled from '@emotion/styled';

import './styles.css';
import { ReactComponent as Logo } from './assets/svg/logo.svg';

import TextInput from './components/TextInput/text-input';


type ValueTypes = {
  [key: string]: string;
}

type stateValueType = {
  value: string;
  error: string;
}

type stateObjectType = {
  email : stateValueType;
  password: stateValueType;
}

const LoginWrapper = styled.div(`
        width: 100%;
        margin: 0 0.25rem 0;
        padding: 1rem 0 1.5rem;

        @media (min-width: 360px) {
          max-width: 480px;
          margin: 0 auto 0;
          padding: 2rem 2rem 2.75rem;
        }

        @media (min-width: 960px) {
          margin-top: 12rem;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 0.375rem;
        }
      `),
      LogoS = styled.span(`
        margin-left: 2.5rem;
      `),
      Button = styled.button(`
        width: 90%;
        height: 3rem;
        margin-top: 2rem;
        border: none;
        color: #fff;
        background-color: #2d9482;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.04rem;
        box-shadow: 0px 0.25rem 0.5rem 0 rgba(0,0,0,0.5);

        @media (min-width: 360px) {
          height: 4rem;
          width: 100%;
          margin-top: 3.2rem;
        }
      `),
      Hidden = styled.p(`
        clip-path: inset(100%);
        clip: rect(1px 1px 1px 1px); /* IE 6/7 */
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; /* added line */
        width: 1px;
      `),
      App = () => {
        const stateSchema = {
          email: { value: "", error: "" },
          password: { value: "", error: "" },
        },
        // Per https://emailregex.com/
        emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        minLengthRegex = /.{8,}/,
        validationSchema = {
          email: {
            required: true,
            validator: {
              func: (value: string) => emailRegex.test(value),
              error: 'validEmail',
            },
          },
          password: {
            required: true,
            validator: {
              func: (value: string) => minLengthRegex.test(value),
              error: 'minLength8',
            },
          },
        },
        onSubmitForm = (state: stateObjectType) => {
          console.log(JSON.stringify(state, null, 2));
        },
        { values, errors, handleOnChange, handleOnSubmit, disable } = useForm(
          stateSchema,
          validationSchema,
          onSubmitForm
        ),
        //@ts-ignore
        { email, password } = values;

  return (
    <div className="App">
      <LoginWrapper className="loginWrapper">
        <LogoS>
          <Logo className="logo"/>
        </LogoS>
        <form onSubmit={handleOnSubmit}>
          <Hidden>
            Form requirements
            <ul>
              <li>Email and password are both required fields</li>
              <li>Email must be a valid email format</li>
              <li>Password must be at least 8 characters</li>
            </ul>
          </Hidden>
          <TextInput
            name="email"
            label="Email"
            errors={errors}
            handleOnChange={handleOnChange}
            value={email}
          />
          <TextInput
            name="password"
            label="Password"
            type="password"
            errors={errors}
            handleOnChange={handleOnChange}
            value={password}
          />
          <Button
            id="submit-button"
            type="submit"
            disabled={disable}
          >
            Log In
          </Button>
        </form>
      </LoginWrapper>
    </div>
  );
};

export default App;
