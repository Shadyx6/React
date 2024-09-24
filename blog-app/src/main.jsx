import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Protector  from './Components/Protector.jsx'
import { Signup,LoginPage } from './Components/index.js'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Post from './pages/Post.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
     {
      path: '/',
      element: <HomePage/>
     },
     {
      path: '/login',
      element: (
        <Protector authentication={false}>
          <LoginPage />
        </Protector>
      )
   
     },
     {
      path: '/signup',
      element: (
        <Protector authentication={false}>
          <Signup />
        </Protector>
      )
     },
     {
      path: '/edit-blog/:slug',
      element: (
        <Protector authentication>
          {" "}
          <EditPost />
        </Protector>
      )
     },
     {
      path: '/add-blog',
      element: (
        <Protector authentication>
          {" "}
          <AddPost />
        </Protector>
      )
     },
     {
      path : '/blog/:slug',
      element: <Post />
     },
     {
      path: '/my-blogs',
      element: (
        <Protector authentication>
          {" "}
          <AllPosts />
        </Protector>
      )
     }

    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
