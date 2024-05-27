import React from 'react'
import useTheme from '../Contexts/Theme'

function ThemeBtn() {
    const { Theme, DarkMode, LightMode} = useTheme()
const onChangeBtn = (e) => {
if(e.currentTarget.checked) {
    DarkMode()
}
else{
    LightMode()
}
}

  return (
    <>
        <div className="flex flex-col items-center justify-center gap-6 ml-72 mt-6 ">
  <label className="relative inline-flex cursor-pointer items-center">
    <input id="switch" type="checkbox" className="peer sr-only" onChange={onChangeBtn} checked={Theme === 'dark'} />
    <label htmlFor="switch" className="hidden"></label>
    <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300">
        
    </div>
  </label>
  </div>
    </>
  )
}

export default ThemeBtn