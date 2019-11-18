import React from 'react';
import { shallow } from 'enzyme';
import documentReducer from './documentReducer';

describe('documentReducer component', () => {
  it('renders documentReducer', () => {
    const wrapper = shallow(<documentReducer />);
    expect(wrapper).toMatchSnapshot();
  });
});
