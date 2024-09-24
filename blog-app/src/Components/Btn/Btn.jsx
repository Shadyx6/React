import React from 'react'

function Btn({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Btn

