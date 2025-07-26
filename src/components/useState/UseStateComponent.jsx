import React, { useState } from 'react'

function UseStateComponent() {

    const [count,setCount]=useState(0)
  return (
    <div>
        <h2>my number is {count}</h2>
        <button type='button' onClick={()=>{setCount(count+1)}}>increase</button>
        <br/>
        <button type='button' onClick={()=>{setCount(count-1)}}>decrease</button>
    </div>
  )
}

export default UseStateComponent