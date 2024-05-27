import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider,  createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Works from './Components/Works/Works.jsx'
import Github, {gitInfo} from './Components/Github/Github.jsx'
import Users from './Components/Users/Users.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />}/>
    <Route path='works' element={<Works />}/>
    <Route path='users' element={<Users/>}> 
    <Route path=':userId' element={<Users />}/>
    </Route>
    <Route loader={gitInfo} path='/github' element={<Github />}/>
    <Route path='*' element={<h1>404 Not Found</h1>}/>
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
 