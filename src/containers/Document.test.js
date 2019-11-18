import React from 'react';
import { shallow } from 'enzyme';
import Document from './Document';
import store from '../store';

describe('Document component', () => {
  it('renders Document', () => {
    const wrapper = shallow(<Document store={store}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
