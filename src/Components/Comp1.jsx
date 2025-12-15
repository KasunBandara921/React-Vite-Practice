import React, { useState } from 'react'

function Comp1() {
    const [username,setUserName] = useState ("Guest");
  return (
    <div>
        <h2>parent</h2>
        <p>Welcome {username}</p>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>{
            setUserName(e.target.value)
        }} />
      
    </div>
  )
}

export default Comp1
