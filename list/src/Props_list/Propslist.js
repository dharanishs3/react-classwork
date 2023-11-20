import React from 'react'
import './Demo.css';

function Demo(props){
    return(
        <>
        <div className='mystyle'>
            
        my name is {props.name}
        </div>
        </>
    )
}
export default function List1(){
    const list=["Apple","Mango","Orange","lime"];
    return(
        <div className="mystyle">
    

            {list.map((item)=><Demo name={item}></Demo>)}
            
        </div>
    )
}
