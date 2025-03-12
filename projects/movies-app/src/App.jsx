import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import "./App.css"
import { useCallback, useState } from 'react'
import debounce from "just-debounce-it"

function App() {
  const [ sort, setSort] = useState(false)
  const { search, updateSearch, errorSearch } = useSearch()
  const { sortedMovies, getMovies, loading, errorMovies } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search });
    }, 300, true),
    []
  );
 
    
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }
  
    const handleSort = () => {
      setSort(!sort)
    }

  const handleChangeQuery = (event) => {
    if (event.target.value.startsWith(' ')) return
    updateSearch(event.target.value)
    debounceGetMovies(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' value={search} onChange={handleChangeQuery} type="text" placeholder='Avangers, Star Wars...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>

        {errorSearch && <p className='error'>{errorSearch}</p>}
      </header>

      <main>
        {
          <Movies movies={sortedMovies} />
        }
        {
          loading && (
            <img src="src\assets\tube-spinner.png" alt="loading-icon" className='loader' />
          )
        }
        {
          errorMovies && <p style={{ color: 'red' }} className='error'>{errorMovies}</p>
        }
      </main>
    </div>
  )
}

export default App
