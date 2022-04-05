import { Poster } from "./MoviePoster"; //collections
import { ProductionCompany } from "./MovieProductionCompany"; // iProduction company
import { Status } from "./MovieStatus";
import { Movie } from "./Movie";

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Poster;
  budget: number;
  genres: Movie[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  productionCompanies: ProductionCompany[];
  productionCountries: { name: string }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: { name: string }[];
  status: Status;
  tagline: string;
  title: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
};
