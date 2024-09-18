import './App.css'
import store from './store/store'
import authSlice from './store/authSlice'
import { React,useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Login,Logout } from './store/authSlice'
import { Header, Footer } from './Components'
import { Outlet } from 'react-router-dom'
function App() {
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch() 


useEffect(() => {
    authService.isLoggedIn()
        .then((userData) => {
            if (userData) {
                dispatch(Login({ userData }));
            } else {
                dispatch(Logout());
            }
        })
        .catch((error) => {
            console.log("Error during session check:", error);
        })
        .finally(() => setLoading(false)); // Ensure Loading state is updated
}, [dispatch]);


 return !Loading ? (
  <div className='h-screen w-screen content-between bg-green-200'>
    <Header/>
    <Outlet />
        <Footer/>
  </div>
 ) : null
  
}

export default App
