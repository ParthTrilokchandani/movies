import { Box, Heading, Text, Flex, SimpleGrid, Center } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CastCard from "../components/castCard";
// import GenreChip from "../components/GenreChip"
import Loader from "../components/activityIndicator";
import MovieCard from "../components/movieCard";
import useFetchMovies from "../hooks/fetchMovies";
import { useFetchMoviesCast } from "../hooks/fetchMoviesCast";
import { useFetchMovieDetails } from "../hooks/fetchMoviesDetails";
// import { useFetchMovieRecommendations } from "../hooks/useFetchMovieRecommendations"

export default function MovieDetailsPage() {
  const movieId = useParams().id as string;
  const { movieDetails } = useFetchMovieDetails(movieId);
  const { castList } = useFetchMoviesCast(movieId);
  //   if (isLoading) return <Loader />;
  if (!movieDetails) return null;

  const imageUrl =
    "https://image.tmdb.org/t/p/w500" + movieDetails.poster_path ?? "";
  const backDropImageUrl =
    "https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path ?? "";

  return (
    <Box width={"100%"} bgColor={"black"} minHeight={"100vh"}>
      <PosterCard style={{ backgroundImage: `url(${backDropImageUrl})` }}>
        <PosterCardBody>
          <PosterImage src={imageUrl} alt={movieDetails.title} />
          <Box m={"1"}>
            <Heading>{movieDetails.title}</Heading>
            <Text fontSize={"2xl"} mb={"10"}>
              {movieDetails.tagline}
            </Text>
            <Text>Release date :- {movieDetails.release_date}</Text>
            <Text as="em">Description :- {movieDetails.overview}</Text>
          </Box>
        </PosterCardBody>
      </PosterCard>

      <Box>
        {/* <h2 style={{ marginTop: "30px" }}>Casts</h2> */}
        <Center>
          <Heading m={"5"} fontSize={"30"} float={"right"}>
            Casts
          </Heading>
        </Center>
        <Flex justify={"center"}>
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 5, lg: 7, xl: 8 }}
            gridGap={2}
          >
            {castList.map((cast) => (
              <CastCard key={cast.id} cast={cast} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
}

const PosterCard = styled.div`
  height: 500px;
  background-size: cover;
  background-position: center;
  margin-bottom: 10%;
`;

const PosterCardBody = styled.div`
  border-radius: 10px;
  height: inherit;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  grid-gap: 20px;
  padding: 0px 30px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
`;

const PosterImage = styled.img`
  height: 320px;
  max-width: 320px;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
