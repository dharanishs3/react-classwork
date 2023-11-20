import React from 'react'

export default function DefaultPropsEx(props) {
  return (
    <div>
        <h1 style={{fontFamily:"monospace",color:"skyblue"}}>My name is {props.name} and myself studying in {props.college}</h1>
    </div>
  )
}
DefaultPropsEx.defaultProps={college:"Skcet"}
