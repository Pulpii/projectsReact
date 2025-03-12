export const searchMovies = async ({ search }) => {
  const APIKEY = "4287ad072";

  if (search === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apiKey=${APIKEY}&s=` + search
    );

    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    const json = await response.json();
    const movies = json.Search;

    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

    return mappedMovies;
  } catch (e) {
    throw new Error("Error en la solicitud", e);
  }
};
