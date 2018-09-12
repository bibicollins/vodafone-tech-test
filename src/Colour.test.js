import React from 'react';
import { mount, shallow } from 'enzyme';
import Colour from './Colour';


describe('Colour', () => {

  let colour = mount(<Colour colour="test"/>);
  it('renders the colour', () => {
    expect(colour.find('h4').text()).toEqual('Colour: Gold')
  });
  it("renders an image", () => {
    expect(colour.find("img").prop("src")).toEqual("/static/media/Apple_iPhone_8_Gold-full-product-front.d05bf662.png");
  });
  it('renders the silverPhone image on click', () => {
    colour.find('button').at(1).simulate('click');
    expect(colour.find("img").prop("src")).toEqual("/static/media/Apple_iPhone_8_Silver_WS2-full-product-front.621754c0.png");
  });
  it('renders the spaceGrayPhone image on click', () => {
    colour.find('button').at(2).simulate('click');
    expect(colour.find("img").prop("src")).toEqual("/static/media/Apple_iPhone_8_Space_Grey_WS2-full-product-front.ac7acdc4.png");
  });
  })
