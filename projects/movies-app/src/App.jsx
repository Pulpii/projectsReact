import { useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import "./App.css"

function App() {
  const API = "https://www.omdbapi.com/?apiKey=4287ad07&"
  const { movies } = useMovies()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChangeQuery = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' value={query} onChange={handleChangeQuery} type="text" placeholder='Avangers, Star Wars...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
