import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { Logout } from '../../store/authSlice'
function LogoutBtn() {
     const dispatch = useDispatch()
    const handleLogout = () => {
      authService.logout().then(() => {
        dispatch(Logout())
      })
     
     
    }
  return (

    <button className='px-3 py-2 text-white rounded-full bg-red-500' onClick={handleLogout} >Logout</button >
  )
}

export default LogoutBtn