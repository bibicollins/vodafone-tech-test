import React from 'react';
import PhoneData from './data/phones.json'
import { mount, shallow } from 'enzyme';
import Capacity from './Capacity';
describe('Capacity', () => {
  let capacity = mount(<Capacity />);
  it('renders the current capacity', () => {
    expect(capacity.find('div').first().text()).toContain('Capacity: 64GB')
  });
  it('renders the current upfront price', () => {
    expect(capacity.find('div').first().text()).toContain('From £')
    expect(capacity.find('div').first().text()).toContain('upfront cost')
  })
  it('renders the current monthly price', () => {
    expect(capacity.find('div').first().text()).toContain('When you pay £')
  })
});
