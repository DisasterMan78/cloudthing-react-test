import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';

import './styles.css';
import { ReactComponent as Logo } from './assets/svg/logo.svg';

import TextInput from './components/TextInput/text-input';
import Submit from './components/Submit/submit';

const AppS = styled.div(`
        margin-top: 30px;
      `),
      LogoS = styled.span(`
        margin-left: 2.5rem;
      `),
      validateFields = (event: React.MouseEvent) => {

      },
      App = () => (
        <AppS className="App">
          <LogoS>
            <Logo className="logo"/>
          </LogoS>
          <TextInput
            name="email"
            label="Email"
          />
          <Submit
            id="submit-button"
            label="Log In"
            onClick={validateFields}
          />
        </AppS>
      );

export default App;
