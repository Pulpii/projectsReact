import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { QueryErrorHandler } from './components/QueryErrorHandler'
import "./App.css"

function App() {
  const API = "https://www.omdbapi.com/?apiKey=4287ad07&"
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const queryErrorHandlerRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChangeQuery = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (!queryErrorHandlerRef.current) {
      queryErrorHandlerRef.current = new QueryErrorHandler()
    }
    queryErrorHandlerRef.current.query = query
    queryErrorHandlerRef.current.checkQuery()
    if (queryErrorHandlerRef.current._error) {
      setError(queryErrorHandlerRef.current._message)
    } else {
      setError(null)
    }
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' value={query} onChange={handleChangeQuery} type="text" placeholder='Avangers, Star Wars...' />
          <button type='submit'>Buscar</button>
        </form>

        {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
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
