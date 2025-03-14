import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
import { use } from "react";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef({ search });

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const responseMovies = await searchMovies({ search });
      console.log(responseMovies);
      setMovies(responseMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  });

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { sortedMovies, getMovies, loading, error };
}
