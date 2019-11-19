import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { ReactComponent as Logo } from './assets/svg/logo.svg';

import TextInput from './components/TextInput/text-input';

const App = () => (
  <div className="App">
    <Logo />
    <TextInput
      name="email"
      label="Email"
    />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
