import React from "react";
function Display(){
    return(
        <div>
            <h1 style={{color: "orange",fontFamily: "cursive"}}>Nested Compoment</h1>
        </div>
    )
}
export default function NestedComplement(){
    return (
        <div>
            <Display />
        </div>
    )
}