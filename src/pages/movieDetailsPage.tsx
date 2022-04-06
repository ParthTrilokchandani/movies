import { Box, Heading, Text, Flex, SimpleGrid, Center } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import CastCard from "../components/castCard";
import { useFetchMoviesCast } from "../hooks/useFetchMoviesCast";
import { useFetchMovieDetails } from "../hooks/useFetchMoviesDetails";
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
    <Box width={"100%"} bgColor={"black"} minHeight={"90vh"}>
      <PosterCard style={{ backgroundImage: `url(${backDropImageUrl})` }}>
        <PosterCardBody>
          <PosterImage src={imageUrl} alt={movieDetails.title} />
          <Box m={"1"}>
            <Heading color={"white"}>{movieDetails.title}</Heading>
            <Text fontSize={"2xl"} mb={"10"} color={"white"}>
              {movieDetails.tagline}
            </Text>
            <Text color={"white"}>
              Release date :- {movieDetails.release_date}
            </Text>
            <Text as="em" color={"white"}>
              Description :- {movieDetails.overview}
            </Text>
          </Box>
        </PosterCardBody>
      </PosterCard>

      <Center marginTop={"-8%"}>
        <Heading color={"white"} m={"5"} fontSize={"30"} float={"right"}>
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
  );
}

const PosterCard = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center;
  margin-bottom: 10%;
`;

const PosterCardBody = styled.div`
  height: inherit;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  grid-gap: 50px;
  padding: 0px 30px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
`;

const PosterImage = styled.img`
  border-radius: 10%;
  height: 320px;
  max-width: 320px;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
