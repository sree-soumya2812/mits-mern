import React,{ useState }from 'react'

const Contact = () => {
  const [name,setName]= useState("G Sree Soumya");
  const toggleName=()=>{
    setName(name==="G Sree Soumya" ? "Soumi" : "G Sree Soumya");
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick ={toggleName}>toggle</button>
    </div>
  )
}

export default Contact
