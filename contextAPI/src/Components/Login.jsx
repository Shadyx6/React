import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const {setUser} = useContext(UserContext)
  
  
    function handleSubmit(e) {
      e.preventDefault()
      setUser({username, password})
    }
  
    return (
      <>
       <input type="text" 
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       />
       <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
       />
       <button onClick={handleSubmit} type="submit">Submit</button>
      </>
    )
  }

export default Login