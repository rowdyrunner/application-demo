import React,{useState,useRef,useEffect} from 'react';

const App=()=>{
  const [value,setValue]=useState(0);
  const [count,setCount]=useState(4);
  useEffect(()=>{
     setCount(prev=>prev+1)
  },[value])

return(
  <>
  <div className="">
    <h1>{value}</h1>
    <h2>{count}</h2>
    <br/>
    <button onClick={()=>setValue(prev=>prev+1)}>increase</button>
  </div>
  </>
)
}
export default App;