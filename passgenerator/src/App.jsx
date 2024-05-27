import { useState, useCallback, useEffect, useRef } from 'react' 
import './App.css'

function App() {
  const [length, setlength] = useState(12)
  const [specialChar, setSpecial] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [password, setPass] = useState('password here')


  const passref = useRef(null)


  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numbers) str += '0123456789982398297243723928390830218209029843028492843024029430290294'
    if(specialChar) str += '!@#$%^&*()_+=-'

    for(let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length ) // for selecting an individual character from str 
       pass += str.charAt(char) // for appending that individual char from str to pass

        } 
        setPass(pass)

  }, [length, numbers, specialChar] )

  useEffect(() => {
    generatePassword()
  
  }, [length, numbers, specialChar])
  const copied = () => {
    window.navigator.clipboard.writeText(password)
    passref.current.select()
  }
  
  return (
    <>
      <div className="container gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 h-fit flex flex-col justify-evenly w-fit p-14  rounded-md whitespace-nowrap">
        <h1 className=' text-4xl text-rose-300'>Get your password generated at ease!</h1>
        <div className="flex justify-center items-center mt-4 gap-20">
        <input type="text"
        value={password}
        ref={passref}
        placeholder='Password'
        readOnly
        className=' h-fit w-fit py-2 px-4 border-2 border-blue-500 border-solid'
         />
         <button onClick={copied} className='h-fit w-fit bg-blue-600 rounded-xl py-2 px-4 text-white'>Copy</button>
      </div>
      <div className="details  flex justify-center items-center mt-4 gap-20">
        <div className="range flex items-center gap-3">
        <input type="range" name="length" id="" className=' cursor-pointer'
        min={6}
        max={18}
        value={length}
        onChange={(e) => {setlength(parseInt(e.target.value))}}
       />
       <label className='text-white' htmlFor="length">length: {length}</label>
       </div>
       <div className="range flex items-center gap-1 text-white">
       <input type="checkbox" name="Number" id="" onChange={() => {
        setNumbers(prev => !prev)
       }}
      />
      <label htmlFor="Numbers">Include Numbers</label>
       </div>
       <div className="range flex items-center gap-1 text-white">
       <input type="checkbox" name="Number" id="" onChange={() => {
        setSpecial(prev => !prev)
       }}
      />
      <label htmlFor="Symbols">Include Symbols</label>
       </div>
      </div>
      </div>
    </>
  )
}

export default App
