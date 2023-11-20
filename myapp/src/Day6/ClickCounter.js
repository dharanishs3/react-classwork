import React, { Component } from 'react'
import EnComponent from './EnComponent';

 class ClickCounter extends Component {
  render(){

      return(
          <button onClick={this.props.inc}>click me {this.props.count}</button>
          
        );
   }
}
export default EnComponent(ClickCounter)
