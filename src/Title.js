import React, { Component } from 'react';
import PhoneData from './data/phones.json'
import css from './Title.css'
export class Title extends Component {
  render() {
    return (
      <div >
        {PhoneData.map((phone, index)=>{
          return <div className="title" key={index}>
          <h1>{phone.groupName}</h1>
          <h2>{phone.rating}</h2>
          <h3>{phone.deviceSummary[0].displayDescription}</h3>
          <h4>{phone.deviceSummary[0].displayDescription2}</h4>
          </div>
        })}
        </div>
    );
  }
}

export default Title;
