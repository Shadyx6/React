import React, { useEffect, useRef } from 'react'
import {Container, Btn} from '../index'
import {useSelector} from 'react-redux'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import LogoutBtn from '../Logout/LogoutBtn'
import { list } from 'postcss'
import logo from '../../assets/logo.png'
function Header() {
  const collapseMenuRef = useRef(null)
  function handleClick() {

    const collapseMenu = collapseMenuRef.current;
    if (collapseMenu) {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }
  }


  const authStatus = useSelector((state) => state.auth.status)
  const Navigate = useNavigate()
  const navTags = [
    {name: 'Home', path: '/', active: true},
    {name: 'blogs', path: '/my-blogs', active: authStatus},
    {name: 'Add Blog', path: '/add-blog', active: authStatus},
    {name: 'Login', path: '/login', active: !authStatus},
    {name: 'Signup', path: '/signup',active: !authStatus},
  ]

  return (
   <>
   <header className='flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div className='flex flex-wrap items-center gap-3 w-full'>
      <div className='h-20 w-20 overflow-hidden rounded-full'>
      <img src={logo} className='h-full w-full object-cover'  alt="" />
      </div>
      
      <h1>Blog bliss</h1>
  
      <div id="collapseMenu"
      ref={collapseMenuRef}
        className='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" onClick={handleClick} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>
  
        <ul
          className='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          {navTags.map((tag) => (
             tag.active ? ( <li key={tag.name} className='max-lg:border-b max-lg:py-3 px-3'><button onClick={() => Navigate(tag.path)}
              className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>{tag.name}</button>
          </li>
          ) : null
          ))}
        </ul>
       
      </div>
  
      <button id="toggleOpen" onClick={handleClick} className='lg:hidden ml-auto'>
        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"></path>
        </svg>
      </button>
  
      <div className='flex lg:ml-auto max-lg:w-full'>
        <div
          className='flex items-center justify-center xl:w-80 max-xl:w-full py-3 rounded'>
      {authStatus && (
      
          <LogoutBtn />
      
      )}
        </div>
      </div>
    </div>
  </header>
   </>
  )
}

export default Header