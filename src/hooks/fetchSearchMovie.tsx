import { useState, useEffect } from "react";
import { Movie } from "../classes/Movie";
function useSearchMovie(searchTerm: Text) {
  //   useState(true);
  const [movies, setMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((json) => setMovie((currentMoviesNames) => [...currentMoviesNames]))
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [searchTerm]);
  return { movies, isLoading };
}
export default useSearchMovie;
