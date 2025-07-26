import React, {useState,useEffect} from 'react'

const UseEffectComponent = () => {
    const [data,setData]=useState(0)
    useEffect(() =>{
        const fetchData = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/10')

            const result = await response.json()
            console.log(result)
        }
        fetchData()
    },[data])
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>{setData(data+1)}}>update</button>
        <br/>
        <button onClick={() =>{setData(data-1)}}>delete</button>
    </div>
  )
}

export default UseEffectComponent