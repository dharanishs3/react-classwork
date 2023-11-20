import React, { Component } from 'react'

export default class ReFc extends Component {
  MyRef=React.createRef();
  handleChange=(e)=>{
    e.preventDefault();
    const val=this.MyRef.current.value;
    console.log(val);
  }
  render(){
    return(
        <div>
            <form onSubmit={this.handleChange}>
                <input type="type" ref={this.MyRef}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
  }
}
