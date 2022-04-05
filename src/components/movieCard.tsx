import { Box, Image, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { Movie } from "../classes/Movie";
const MovieCard: FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Box
      margin={"1.5"}
      padding={"1px"}
      boxShadow={"2xl"}
      textAlign={"center"}
      borderRadius={"2xl"}
      maxW={190}
    >
      <Box overflow={"hidden"} margin={"5px"} mb={1} borderRadius={"2xl"}>
        <Image
          overflow={"hidden"}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        ></Image>
      </Box>
      <Box m={1}>
        <Heading fontSize={"15"} fontFamily={"body"} marginTop={"10px"} m={1}>
          {movie.title}
        </Heading>
        <Heading fontSize={"15"}>{movie.release_date}</Heading>
      </Box>
    </Box>
  );
};
export default MovieCard;
