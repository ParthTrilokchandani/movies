import { useState, useEffect } from "react";
import { Movie } from "../classes/Movie";
function useFetchMovies(page: Number) {
  //   useState(true);
  const [movies, setMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=${page}`
    )
      .then((response) => response.json())
      .then((json) =>
        setMovie((currentMovies) => [...currentMovies, ...json.results])
      )
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [page]);
  return { movies, isLoading };
}
export default useFetchMovies;
