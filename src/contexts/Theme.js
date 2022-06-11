import React, {useState, createContext} from 'react'

const ThemeContext= createContext()

export function ThemeContextProvider({children}) {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider value={{darkMode, handleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext