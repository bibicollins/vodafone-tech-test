import React from 'react';
import PhoneData from './data/phones.json'
import { mount, shallow } from 'enzyme';
import Capacity from './Capacity';
import renderer from 'react-test-renderer';
describe('Capacity', () => {
  let capacity = mount(<Capacity />);
  it('renders the current capacity', () => {
    expect(capacity.find('div').first().text()).toContain('Capacity: 64GB')
  });

  it('changes the current monthly price if 256GB button clicked', () => {
    capacity.find('button').at(1).simulate('click');
    expect(capacity.find('div').first().text()).toContain('When you pay £46.80 a month')
    expect(capacity.find('div').first().text()).toContain('From £275 upfront cost')
  })
  it('changes the current monthly price if 64GB button clicked', () => {
    capacity.find('button').at(0).simulate('click');
    expect(capacity.find('div').first().text()).toContain('When you pay £43.20 a month')
    expect(capacity.find('div').first().text()).toContain('From £149 upfront cost')
  })
  it('renders correctly', () => {
    const tree = renderer.create(
      <Capacity />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
