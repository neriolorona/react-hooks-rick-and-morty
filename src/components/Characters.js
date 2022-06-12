import React, {useContext, useEffect, useState} from 'react'
import clsx from 'clsx'
import ThemeContext from '../contexts/Theme'
import Character from './Character'

const URL_API = 'https://rickandmortyapi.com/api'

const Characters = () => {
  const {darkMode} = useContext(ThemeContext)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(`${URL_API}/character`)
      .then(response => response.json() )
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <div className={clsx('mx-auto mt-4 grid justify-items-center items-center gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6', {'bg-black': darkMode, 'bg-white': !darkMode})} >
      {characters.map(character => <Character {...character} />)}
    </div>
  )
}

export default Characters