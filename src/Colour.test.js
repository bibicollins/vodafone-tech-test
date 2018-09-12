import React from 'react';
import { mount, shallow } from 'enzyme';
import Colour from './Colour';
import GoldPhone from './data/Apple_iPhone_8_Gold-full-product-front.png'

describe('Colour', () => {
  let mockSilverHandleClick;
 let wrapper;
 beforeEach(() => {
   let wrapper = shallow(<Colour silverHandleClick={mockSilverHandleClick} />);
   mockSilverHandleClick = jest.fn();
   let silverHandleClick = wrapper.instance()
 });

  let colour = mount(<Colour colour="test"/>);
  it('renders the colour', () => {
    expect(colour.find('h4').text()).toEqual('Colour: Gold')
  });
  it("renders an image", () => {
    expect(colour.find("img").prop("src")).toEqual("/static/media/Apple_iPhone_8_Gold-full-product-front.d05bf662.png");
  });
  it('renders an image on click', () => {
    colour.find('button').at(1).simulate('click');
    expect(wrapper.instance()).toHaveBeenCalled();
  });
  })
