/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import App from './App.tsx';


configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const Component = () => (
        // eslint-disable-next-line react/jsx-indent
        <App />
      ),
      wrapper = mount(<Component />);

describe('App rendered', () => {
  it('should render', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render the logo', () => {
    expect(wrapper.find('svg[className*="logo"]').length)
      .to.equal(1);
  });

  it('should render the email input', () => {
    expect(wrapper.find('TextInput[name="email"]').length)
      .to.equal(1);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('button[type="submit"]').length)
      .to.equal(1);
  });
});
