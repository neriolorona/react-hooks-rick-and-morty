import React, {useContext, useEffect, useState} from 'react'
import clsx from 'clsx'
import ThemeContext from '../contexts/Theme'
import Character from './Character'

const URL_API = 'https://rickandmortyapi.com/api'

const Characters = () => {
  const {darkMode} = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
    setIsLoading(true)
    fetch(`${URL_API}/character`)
      .then(response => response.json() )
      .then(data => {
        setCharacters(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('Error getting characters', error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const renderCharactes = () => {
    if(isLoading) {
      return <p>Cargando...</p>
    }

    return (
      <>
        {characters.map(character => <Character key={character.id} {...character} />)}
      </>
    )
  }

  return (
    <section className={clsx('p-4 grid justify-items-center items-center gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6', {'bg-black': darkMode, 'bg-white': !darkMode})} >
      {renderCharactes()}
    </section>
  )
}

export default Characters