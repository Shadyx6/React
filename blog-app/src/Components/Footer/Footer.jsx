import React from 'react'
import logo from '../../assets/logo.png'
function Footer() {
  return (
  <>
  

<footer className="bg-white rounded-lg shadow  m-4 bottom-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-28 w-28 rounded-full" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Blog bliss</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                <li>
                    <a  href="https://www.instagram.com/shad.codes/" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                <a target='_blank'  href="https://www.instagram.com/shad.codes/" className="hover:underline me-4 md:me-6" >Contact</a>
               
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto y-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="#" className="hover:underline">Blog bliss™</a>. All Rights Reserved.</span>
    </div>
</footer>

     
  </>
  )
}

export default Footer