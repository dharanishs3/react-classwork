import React, { Component } from 'react'

/*export default class PropsClassCom extends Component {
 render(){
     return(
         <div>
         <h1>I am at {this.props.name}</h1>
         </div>
         )
        }
    } 
}*/
    export default class PropsClassCom extends Component{
        /*state={name:"skcet"}

        //changeCollege=()=>{this.setState({name:"KCT"})}
        render(){
        return (
            <div>
               
                <h1 style={{fontWeight:"revert",fontFamily:"fantasy",color:"darkmagenta",}}>
                    <span >I am at {this.state.name}</span>
                </h1>
                <button onClick={()=>{this.setState({name:"Udhagamandalam"})}}>click me</button>
            </div>
            )*/
       /* constructor(){
            super();
            this.state={name:"SKCET",
            place:"CBE",count:0}
            
        }
        changeCollege(){
            if(this.state.name==="SKCET"){
            this.setState({name:"KCT"})
           
            this.setState({count:this.state.count+1})
            }
            else{
                this.setState({name:"SKCET"})
                this.setState({count:this.state.count+1})
            }
        }
        render(){
            return (
                <div>
                   
                    <h1 style={{fontWeight:"revert",fontFamily:"fantasy",color:"darkmagenta",}}>
                        <span >I am at {this.state.name}</span>
                    </h1>
                    <h1>count:{this.state.count}</h1>
                    <button onClick={this.changeCollege.bind(this)}>click me</button>

                </div>
            )*/
        render(){
            return(
                <div>
                    <h1>
                        Hi
                    </h1>
                </div>
            )
        }
    }
