import React, { Component } from 'react'

export default class SpreadPassingUnknow extends Component {
  render(){
    const{title1,...restValue}=this.props;
    return(
        <div>
            <h1>Title is {title1}</h1>
            <input {...restValue} required></input>
           
            <button ><a href='https://www.geeksforgeeks.org/reactjs-tutorials/'>lick me</a></button>
        </div>
    )
  }
}
