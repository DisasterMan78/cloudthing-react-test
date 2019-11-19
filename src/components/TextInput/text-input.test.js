/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import TextInput from './text-input';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const name = 'input-name',
      Component = () => (
        <TextInput
          name={name}
        />
      ),
      wrapper = mount(<Component />);

describe('Song list component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a wrapper element', () => {
    expect(wrapper.find('span[className="input-wrapper"]').length)
      .to.equal(1);
  });

  it('should render a input element with id attribute', () => {
    expect(wrapper.find(`input[id="${name}"]`).length)
      .to.equal(1);
  });
});
