import nonResults from '/src/mocks/non-results.json'
// función sumatoria de numeros que acepte dos parámetros
export function ListOfMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )

}

export function NonResults() {
    return (
        <h2>{nonResults.Error}</h2>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NonResults />
    )
}