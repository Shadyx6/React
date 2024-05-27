import { useState } from 'react'
import './App.css'

function App() {
  const [on, setOn] = useState('bg-blue-200')

  const switchNBtn = () => {
    setOn(on === 'bg-green-200' ? 'bg-red-500' : 'bg-green-200')
  
    }
  return (
    <>
    <div className={`container flex bg-s flex-col justify-center items-center gap-10 p-10 rounded-full h-screen w-full ${on}`}>
      <h1 className=' text text-6xl text-center'>This is a basic React app that changes color on switch</h1>
      <button onClick={switchNBtn}  className='button text-5xl py-4 px-8 rounded-xl border-2 text-center border-orange-950 bg-green-300 border-solid'>Switch</button>
      </div>
    </>
  )
}

export default App
