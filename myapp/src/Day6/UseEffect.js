import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const[count,setCount]=useState(0);
    useEffect(()=>{document.title=`count ${count}`})
  return (
    <div>
        <h1>count value {count}</h1>
        <button onMouseOver={()=>setCount(count+1)}>click me</button>
    </div>
  )
}
