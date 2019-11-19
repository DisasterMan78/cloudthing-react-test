/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import TextInput from './text-input.tsx';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const name = 'input-name',
      label = 'Input Label',
      tabIndex = '99',
      Component = () => (
        <TextInput
          name={name}
          label={label}
        />
      ),
      wrapper = mount(<Component />);

describe('Song list component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a wrapper element', () => {
    expect(wrapper.find('div[className*="input-wrapper"]').length)
      .to.equal(1);
  });

  it('should render a input element with id attribute', () => {
    expect(wrapper.find(`input[id="${name}"]`).length)
      .to.equal(1);
  });

  it('should render a the tabindex attribute of the input conditionally', () => {
    const IndexComponent = () => (
          // eslint-disable-next-line react/jsx-indent
            <TextInput
              name={name}
              label={label}
              tabIndex={tabIndex}
            />
          ),
          indexWrapper = mount(<IndexComponent />)

    expect(wrapper.find('input[tabIndex="99"]').length)
      .to.equal(0);

    expect(indexWrapper.find('input[tabIndex="99"]').length)
      .to.equal(1);
  });

  it('should render a label element with for attribute and label text', () => {
    const labelElement = wrapper.find(`label[htmlFor="${name}"]`);

    expect(labelElement.length)
      .to.equal(1);

    expect(labelElement.text())
      .to.equal(label);
  });
});
