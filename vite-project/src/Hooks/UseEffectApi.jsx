import React, { useEffect } from 'react'

function UseEffectApi() {
  const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>console.log(data));
        },[]) 
        return (
            <div><ul>
              {users.map((user,index)=>(
                <li key={index}>
                  <p>Name: {user.name}</p>
                 <p>Email: {user.email}</p>
                 <p>latitute: {user.address.geo.lat}</p>
                  </li>
              ))}
              </ul></div>
        )   
}

export default UseEffectApi
