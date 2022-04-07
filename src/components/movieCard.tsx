import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { Movie } from "../classes/Movie";

const MovieCard: FC<{ movie: Movie }> = ({ movie }) => {
  const date = new Date(movie.release_date);
  const newDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Box
      // style={{ filter: "blur(5px)" }}
      margin={"1.5"}
      padding={"1px"}
      boxShadow={"2xl"}
      textAlign={"center"}
      borderRadius={"2xl"}
      maxW={190}
      // backgroundImage={
      //   "url('https://image.tmdb.org/t/p/w500" + movie.poster_path + "')"
      // }
    >
      <Box
        overflow={"hidden"}
        margin={"5px"}
        mb={1}
        borderRadius={"2xl"}
        backdropFilter={"blur(10px)"}
      >
        <Image
          overflow={"hidden"}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        ></Image>
      </Box>
      <Box m={1}>
        <Heading
          fontSize={"15"}
          fontFamily={"body"}
          marginTop={"10px"}
          m={1}
          isTruncated
        >
          {movie.title}
        </Heading>
        <Text as={"abbr"} fontSize={"13"} isTruncated>
          {newDate}
        </Text>
      </Box>
    </Box>
  );
};
export default MovieCard;
