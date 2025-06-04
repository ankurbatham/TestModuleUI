import React, { useState } from 'react'

function App() {
 let [pstatus , setpstatus] = useState(false)


  return (

    
    <div>
      <h1>Password Management</h1>
      
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='Enter your Username' />
        <label htmlFor="password">Password</label>
        <input type={pstatus?'text':'password'} />
        <button onClick={()=>

          setpstatus(!pstatus)
        }>{pstatus? 'hide':'show'}</button>
      
    </div>
  )
}

export default App
