import React, { useReducer } from 'react'

function UseReducerComponent() {
    const countReducer= (state,action) => {
        switch(action.type){
            case"increment":
            return{count:state.count+1}
            case"decrement":
            return{count:state.count-1}
            default:
                return state
        }
    }
    const [state,dispatch]=useReducer(countReducer,{count:0})
    

    
  return (
    <>
    <h2>{state.count}</h2>
    <button onClick={() =>dispatch({type:"increment"})}>increase</button>
    <br/>
    <button onClick={() =>dispatch({type:"decrement"})}>decrease</button>
    </>
  )

}
export default UseReducerComponent