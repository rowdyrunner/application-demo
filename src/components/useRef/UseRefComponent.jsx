import React,{useRef} from 'react'

function UseRefComponent() {
     // Create a ref object
  const myRef = useRef(null);

  // Access the current property to get the current value
  console.log(myRef);
  return (
    <div>
         {/* Attach the ref to an element */}
      <input ref={myRef} type="text" />
    </div>
  )
}

export default UseRefComponent