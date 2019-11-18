import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';
import store from '../store';

describe('Tabs component', () => {
  it('renders Tabs', () => {
    const wrapper = shallow(<Tabs store={store}/>);
    expect(wrapper).toMatchSnapshot();
  });
}); 
