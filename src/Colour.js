import React, { Component } from 'react';
import PhoneData from './data/phones.json'
import GoldPhone from './data/Apple_iPhone_8_Gold-full-product-front.png'
import Silverphone from './data/Apple_iPhone_8_Silver_WS2-full-product-front.png'
import SpacePhone from './data/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png'
import css from './Colour.css'
export class Colour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      image: '/static/media/Apple_iPhone_8_Gold-full-product-front.d05bf662.png'
    }
    this.goldHandleClick = this.goldHandleClick.bind(this)
    this.silverHandleClick = this.silverHandleClick.bind(this)
    this.spaceHandleClick = this.spaceHandleClick.bind(this)
  }
  goldHandleClick() {
    this.setState({index: 0, image: '/static/media/Apple_iPhone_8_Gold-full-product-front.d05bf662.png'})
    console.log('gold was clicked')
  }
  silverHandleClick() {
    this.setState({index: 1, image: '/static/media/Apple_iPhone_8_Silver_WS2-full-product-front.621754c0.png'})
    console.log('silver was clicked')
  }
  spaceHandleClick() {
    this.setState({index: 2, image: '/static/media/Apple_iPhone_8_Space_Grey_WS2-full-product-front.ac7acdc4.png'})
    console.log('space was clicked')
  }

  render() {
    return (
      <div className="buttons">
      <button className="gold" onClick={this.goldHandleClick}></button>
      <button className="silver" onClick={this.silverHandleClick}></button>
      <button className="space" onClick={this.spaceHandleClick}></button>
      {PhoneData.map((phone, index)=>{
        return <div className="colour" key={index}>

        <h4>Colour: {phone.deviceSummary[this.state.index].colourName}</h4>
        <div className="image">
        <img src={this.state.image} width="300" height="500"></img>
        </div>
        </div>
      })}
      </div>
    );
  }
}

export default Colour;
