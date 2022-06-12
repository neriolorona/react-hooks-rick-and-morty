import React, {useContext} from 'react'
import clsx from 'clsx'
import ThemeContext from '../contexts/Theme'

function Header() {
  const {darkMode, handleDarkMode} = useContext(ThemeContext)

  return (
    <div className={clsx('py-2 border-b-2 text-center md:flex md:justify-between md:items-center md:px-12', {'bg-black' : darkMode, 'bg-white': !darkMode})} >
      <div>
        <p className={clsx('font-bold text-xs', {'text-white': darkMode, 'text-black': !darkMode})} >Reak Hooks</p>
        <h3 className={clsx('font-bold', {'text-white': darkMode, 'text-black': !darkMode})} >Rick and Morty</h3>
      </div>
      <button className={clsx('border-2 border-solid py-2 px-8 mt-2 rounded-md hover:bg-violet-600 hover:text-white', {'text-white': darkMode, 'text-black': !darkMode})} onClick={handleDarkMode} >{darkMode ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default Header