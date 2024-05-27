import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    let {userId} = useParams()
  return (
    <>
    <div className="w-full h-screen flex items-center mt-20 flex-col">
        <h1 className='text-5xl'>Hello <span className='text-red-600'> {userId} </span> </h1>
        <p className='w-[250px] text-center text-gray-400 mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero autem repellendus sint, inventore eligendi ratione?</p>
    </div>
    </>
  )
}

export default Users