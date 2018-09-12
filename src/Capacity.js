import React, { Component } from 'react';
import PhoneData from './data/phones.json'
import css from './Capacity.css'
export class Capacity extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }

this.sixtyFourCapacity = this.sixtyFourCapacity.bind(this)
this.twoHundredFiftySix = this.twoHundredFiftySix.bind(this)
}
sixtyFourCapacity() {
  this.setState({index: 0})
  console.log('sixy four was clicked')
  }
twoHundredFiftySix() {
  this.setState({index: 3})
  console.log('two hundred and fifty six was clicked')
}
  render() {
    return (
      <div >
      <button className="64" onClick={this.sixtyFourCapacity}>64GB</button>
      <button className="256" onClick={this.twoHundredFiftySix}>256GB</button>
      {PhoneData.map((phone, index)=> {
        return <div className="capacity" key={index}>
        <h4>Capacity: {phone.deviceSummary[this.state.index].memory}</h4>
        <div className="price1">
        <h4 id="oneOff">From £{phone.deviceSummary[this.state.index].priceInfo.hardwarePrice.oneOffPrice.gross} upfront cost</h4>
        </div>
        <div className="price2">
        <h4 id="month">When you pay £{phone.deviceSummary[this.state.index].priceInfo.bundlePrice.monthlyPrice.gross} a month</h4>
        </div>
        </div>

      })}
      </div>
    );
  }
}

export default Capacity;
