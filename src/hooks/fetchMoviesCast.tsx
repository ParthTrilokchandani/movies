import { useEffect, useState } from "react";
import { Cast } from "../classes/MovieCasts";

export function useFetchMoviesCast(movieId: string) {
  const [castList, setCastList] = useState<Cast[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=55903b004b65252bf433fb4218601d2c`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCastList(data.cast);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return { castList, isLoading };
}
