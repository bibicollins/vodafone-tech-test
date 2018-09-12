import React, { Component } from 'react';
import PhoneData from './data/phones.json'
export class Title extends Component {
  render() {
    return (
      <div >
        {PhoneData.map((phone, index)=>{
          return <div className="title" key={index}>
          <h1>{phone.groupName}</h1>
          <h2>{phone.rating}</h2>
          </div>
        })}
        </div>
    );
  }
}

export default Title;
