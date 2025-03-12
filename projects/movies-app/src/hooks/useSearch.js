import { useState, useEffect, useRef } from "react";
import { QueryErrorHandler } from "../components/QueryErrorHandler";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [errorSearch, setErrorSearch] = useState(null);
  const queryErrorHandlerRef = useRef(null);

  useEffect(() => {
    if (!queryErrorHandlerRef.current) {
      queryErrorHandlerRef.current = new QueryErrorHandler();
    }

    queryErrorHandlerRef.current.query = search;
    queryErrorHandlerRef.current.checkQuery();
    if (queryErrorHandlerRef.current.error) {
      setErrorSearch(queryErrorHandlerRef.current.message);
    } else {
      setErrorSearch(null);
    }
  }, [search]);

  return { search, updateSearch, errorSearch };
}
