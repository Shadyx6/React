import React from 'react'

function Btn({ children, ...props }) {
  return (
    <button className='px-3 py-2 bg-red-300 text-black '>
      {children}
    </button>
  )
}

export default Btn

