import React from 'react';
import PhoneData from './data/phones.json'
import { mount, shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  let title = mount(<Title />);
  it('renders the title', () => {
    console.log(title.debug())
    expect(title.find('h1').text()).toEqual('Apple iPhone 8')
  });
  it('renders the rating', () => {
    expect(title.find('h2').text()).toEqual('4.2')
  });
  it('renders the description', () => {
    expect(title.find('h3').text()).toEqual('All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better.')
  })
});
