import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import ThemeBtn from './Components/ThemeBtn.jsx'
import { ThemeProvider } from './Contexts/Theme.js'
import useTheme from './Contexts/Theme.js'

function App() {
  const [Theme, setTheme] = useState('light')


  const DarkMode = () => {
    setTheme('dark')
  }
  const LightMode = () => {
    setTheme('light')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(Theme)
  }, [Theme])
  
  return (
    <ThemeProvider value={{Theme,DarkMode, LightMode}}>
    <Card/>
    </ThemeProvider>

  )
}

export default App
