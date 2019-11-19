/* globals describe, it */
import React from 'react';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';

import TextInput from './text-input.tsx';
import language from '../../language/language.json';

configure({ adapter: new Adapter() }); // configures Enzyme adapter

chai.use(chaiEnzyme());
chai.use(sinonChai);

const name = 'input-name',
      label = 'Input Label',
      tabIndex = '99',
      register = stub(),
      validation = {
        required: true,
        pattern: {
          value: /nonexistantregex/,
          message: 'validEmail',
        },
      },
      error = {
        type: 'required',
        message: '',
      },
      patternError = {
        type: 'pattern',
        message: 'validEmail',
      },
      Component = () => (
        <TextInput
          name={name}
          label={label}
          register={register}
        />
      ),
      wrapper = mount(<Component />);

describe('TextInput component', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render a wrapper element', () => {
    expect(wrapper.find('div[className*="input-wrapper"]').length)
      .to.equal(1);
  });

  it('should render a input element with matching id and name attributes', () => {
    expect(wrapper.find(`input[id="${name}"]`).length)
      .to.equal(1);

    expect(wrapper.find(`input[name="${name}"]`).length)
      .to.equal(1);
  });

  it('should render a text input element by default', () => {
    expect(wrapper.find('input[type="text"]').length)
      .to.equal(1);
  });

  it('should render a different input type element by request', () => {
    const type = 'password',
          TypeComponent = () => (
          // eslint-disable-next-line react/jsx-indent
            <TextInput
              name={name}
              label={label}
              tabIndex={tabIndex}
              register={register}
              type={type}
            />
          ),
          typeWrapper = mount(<TypeComponent />),
          typeSelector = `input[type="${type}"]`;

    expect(typeWrapper.find(typeSelector).length)
      .to.equal(1);
  });

  it('should render a the tabindex attribute of the input conditionally', () => {
    const IndexComponent = () => (
          // eslint-disable-next-line react/jsx-indent
            <TextInput
              name={name}
              label={label}
              tabIndex={tabIndex}
              register={register}
            />
          ),
          indexWrapper = mount(<IndexComponent />),
          indexSelector = 'input[tabIndex="99"]';

    expect(wrapper.find(indexSelector).length)
      .to.equal(0);

    expect(indexWrapper.find(indexSelector).length)
      .to.equal(1);
  });

  it('should render a label element with for attribute and label text', () => {
    const labelElement = wrapper.find(`label[htmlFor="${name}"]`);

    expect(labelElement.length)
      .to.equal(1);

    expect(labelElement.text())
      .to.equal(label);
  });

  it('should conditionally render an error message from the language file', () => {
    const ErrorComponent = () => (
          // eslint-disable-next-line react/jsx-indent
            <TextInput
              name={name}
              label={label}
              error={error}
              register={register}
              validation={validation}
            />
          ),
          errorWrapper = mount(<ErrorComponent />),
          errorSelector = 'div[className*="input-error"]',
          errorElement = errorWrapper.find(errorSelector);

    expect(wrapper.find(errorSelector).length)
      .to.equal(0);

    expect(errorElement.length)
      .to.equal(1);

    expect(errorElement.text())
      .to.equal(language.errors[error.type]);
  });

  it('should conditionally render an specific "pattern" error message from the language file', () => {
    const ErrorComponent = () => (
          // eslint-disable-next-line react/jsx-indent
            <TextInput
              name={name}
              label={label}
              error={patternError}
              register={register}
              validation={validation}
            />
          ),
          errorWrapper = mount(<ErrorComponent />),
          errorSelector = 'div[className*="input-error"]',
          errorElement = errorWrapper.find(errorSelector);

    expect(errorElement.text())
      .to.equal(language.errors[patternError.message]);
  });
});
