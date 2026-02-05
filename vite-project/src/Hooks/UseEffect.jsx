import React ,{useEffect, useState}from 'react'

const UseEffect = () => {
    const [count,setCount]= useState(0);
    const [Value,setValue]= useState(0);
    useEffect(()=>
    {
        console.log("useEffect Mounted");     
    },[count,Value])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <h1>{Value}</h1>
        <button onClick={()=>setValue(Value+1)}>inc</button>
      
    </div>
  )
}

export default UseEffect
