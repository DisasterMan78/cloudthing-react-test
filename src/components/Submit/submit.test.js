/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';

import Submit from './submit';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const onClick = stub(),
      Component = () => (
        <Submit
          id="Submit-id"
          label="Click This"
          onClick={onClick}
        />
      ),
      wrapper = mount(<Component />),
      button = wrapper.find('button');

describe('Submit component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a button', () => {
    expect(button.length)
      .to.equal(1);
  });

  it('should call the onClick function when clicked', () => {
    button.simulate('click');

    // eslint-disable-next-line no-unused-expressions
    expect(onClick)
      .to.have.been.calledOnce;
  });
});
