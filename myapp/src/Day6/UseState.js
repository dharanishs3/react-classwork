import React from 'react'

export default function UseState() {
    const[student,setStudent]=useState({age:13,name:"Dharanish"})
  return (
    <div>
        <h1>{student.age} {student.name}</h1>
    </div>
  )
}
