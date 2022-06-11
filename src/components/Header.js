import React, {useContext} from 'react'
import clsx from 'clsx'
import ThemeContext from '../contexts/Theme'

function Header() {
  const {darkMode, handleDarkMode} = useContext(ThemeContext)

  return (
    <div className={clsx('flex justify-between items-center mx-auto h-24 px-24', {'bg-black' : darkMode, 'bg-white': !darkMode})} >
      <h3 className={clsx('font-bold', {'text-white': darkMode, 'text-black': !darkMode})} >Reak Hooks</h3>
      <button className="border-2 border-solid py-2 px-6 rounded-md hover:bg-violet-600 hover:text-white" onClick={handleDarkMode} >{darkMode ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default Header