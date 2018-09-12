import React, { Component } from 'react';
import PhoneData from './data/phones.json'
export class Colour extends Component {
  render() {
    return (
      <div >
      {PhoneData.map((phone, index)=> {
        return <div className="colour" key={index}>
        <h1>Colour: {phone.deviceSummary[0].colourName}</h1>
        </div>
      })}
      </div>
    );
  }
}

export default Colour;
