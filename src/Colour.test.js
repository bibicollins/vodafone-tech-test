import React from 'react';
import { mount, shallow } from 'enzyme';
import Colour from './Colour';

describe('Colour', () => {
  let colour = mount(<Colour colour="test"/>);
  it('renders the colour', () => {
    console.log(colour.debug())
    expect(colour.find('h1').text()).toEqual('Colour: Gold')
  });
});
