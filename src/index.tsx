import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';

import './styles.css';
import { ReactComponent as Logo } from './assets/svg/logo.svg';

import TextInput from './components/TextInput/text-input';

const AppS = styled.div(`
        margin-top: 30px;
      `),
      LogoS = styled.span(`
        margin-left: 2.5rem;
      `),
      App = () => (
        <AppS className="App">
          <LogoS>
            <Logo />
          </LogoS>
          <TextInput
            name="email"
            label="Email"
          />
        </AppS>
      );

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
