import React, { useState } from 'react';
import useForm from 'react-hook-form'

import styled from '@emotion/styled';

import './styles.css';
import { ReactComponent as Logo } from './assets/svg/logo.svg';

import TextInput from './components/TextInput/text-input';


type FormDataTypes = {
  email?: string;
}

const AppS = styled.div(`
        margin-top: 30px;
      `),
      LogoS = styled.span(`
        margin-left: 2.5rem;
      `),
      // Per https://emailregex.com/
      emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      App = () => {
        const { register, handleSubmit, watch, errors } = useForm(),
              emailValidation = {
                required: true,
                pattern: {
                  value: emailRegex,
                  message: 'validEmail',
                },
              },
              passwordValidation = {
                required: true,
                minLength: {
                  value: 8,
                  message: 'minLength8',
                },
              },
              onSubmit = (data: any, event: any) => {
                if (Object.keys(errors).length) {
                  event.preventDefault();
                }
                console.log('Submit form...')
              };

        return (
          <AppS className="App">
            <LogoS>
              <Logo className="logo"/>
            </LogoS>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                name="email"
                label="Email"
                validation={emailValidation}
                error={errors.email}
                register={register}
              />
              <TextInput
                name="password"
                label="Password"
                type="password"
                validation={passwordValidation}
                error={errors.password}
                register={register}
              />
              <button
                id="submit-button"
                type="submit"
              >
                Log In
              </button>
            </form>
          </AppS>
        )
      };

export default App;
