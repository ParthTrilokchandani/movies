import { useEffect, useState } from "react";
import { MovieDetails } from "../classes/MovieDetails";

export function useFetchMovieDetails(movieId: string) {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=55903b004b65252bf433fb4218601d2c&language=en-US`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return { movieDetails, isLoading };
}
