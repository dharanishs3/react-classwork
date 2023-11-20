import React, { Component } from 'react'

export default class ComponentDid extends Component{
     state={color1:"yellow"}
     /*shouldComponentUpdate(){
        return true;
     }*/
     componentDidMount()
     {
        setTimeout(()=>{this.setState({color1:"Blue"})},3000)
     }
     getSnapshotBeforeUpdate(prevPros,prevState){
        document.getElementById("1").innerHTML="my previous value is "+prevState.color1;
     }
     componentDidUpdate(){
        document.getElementById("ii").innerHTML="my current value "+this.state.color1;
     }
     render(){
        return(
            <div>
                <h1>{this.state.color1}</h1>
                <p id="1"></p>
                <p id="ii"></p>
            </div>
        )
     }
}
