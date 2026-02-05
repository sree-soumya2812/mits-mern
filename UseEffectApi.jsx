import React, { useEffect } from 'react'

function UseEffectApi() {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>console.log(data));
        },[]) 
        return (
            <div>UseEffectApi</div>
        )   
}

export default UseEffectApi