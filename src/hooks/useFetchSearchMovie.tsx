import { useState, useEffect } from "react";
import { MovieSearched } from "../classes/MovieSearched";
function useFetchSearchMovie(searchTerm: String) {
  //   useState(true);        useState<Movie[]>([])
  const [searchMovies, setSearchMovies] = useState<MovieSearched[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((json) => setSearchMovies(json))
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [searchTerm]);
  return { searchMovies, isLoading };
}
export default useFetchSearchMovie;
