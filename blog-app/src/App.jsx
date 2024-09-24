import './App.css'
import store from './store/store'
import authSlice from './store/authSlice'
import { React,useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Login,Logout } from './store/authSlice'
import { Header, Footer } from './Components'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from './Components/Loader'

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
        .finally(() => setLoading(false)); 
}, [dispatch]);


return (
    <>
      {Loading ? (
        <>
        <Header />
         <LoadingSpinner /> 
         <Footer />
        </>
       
      ) : (
        <div className="h-screen w-screen content-between">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App
