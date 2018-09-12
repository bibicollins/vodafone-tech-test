import React, { Component } from 'react';
import PhoneData from './data/phones.json'
import css from './Capacity.css'
export class Capacity extends Component {
  render() {
    return (
      <div >
      {PhoneData.map((phone, index)=> {
        return <div className="capacity" key={index}>
        <h4>Capacity: {phone.deviceSummary[0].memory}</h4>
        <div className="price1">
        <h4 id="oneOff">From £{phone.deviceSummary[0].priceInfo.hardwarePrice.oneOffPrice.gross} upfront cost</h4>
        </div>
        <div className="price2">
        <h4 id="month">When you pay £{phone.deviceSummary[0].priceInfo.bundlePrice.monthlyPrice.gross} a month</h4>
        </div>
        </div>

      })}
      </div>
    );
  }
}

export default Capacity;
