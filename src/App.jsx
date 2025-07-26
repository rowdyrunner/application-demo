import React,{useState,useRef,useEffect} from 'react';

const App=()=>{
  const [value,setValue]=useState(0);
   

  

return(
  <>
  <div className="">
    <h1>{value}</h1>
    <br/>
    <button onClick={()=>setValue(prev=>prev+1)}>increase</button>
  </div>
  </>
)
}
export default App;