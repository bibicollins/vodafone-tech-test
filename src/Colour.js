import React, { Component } from 'react';
import PhoneData from './data/phones.json'
import css from './Colour.css'
export class Colour extends Component {
  render() {
    return (
      <div >
      {PhoneData.map((phone, index)=> {
        return <div className="colour" key={index}>
        <h4>Colour: {phone.deviceSummary[0].colourName}</h4>
        </div>
      })}
      </div>
    );
  }
}

export default Colour;
