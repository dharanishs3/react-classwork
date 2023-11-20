import React, { Component } from 'react'

export default function EnComponent(OrComponent) {
  class NewComponent extends Component{
       state={count:1}
       inc=()=>{this.setState({count:this.state.count+1})}
    render(){
        return <OrComponent inc={this.inc} count={this.state.count}></OrComponent>
    }
  }
  return NewComponent
}
