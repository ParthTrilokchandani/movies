import "../App.css";
import {
  Flex,
  Input,
  Heading,
  useColorMode,
  InputGroup,
  Button,
  InputLeftElement,
  SimpleGrid,
  Spinner,
  CloseButton,
  InputRightElement,
  OrderedList,
  ListItem,
  List,
} from "@chakra-ui/react";

import Loader from "../components/activityIndicator";
import { Search2Icon, MoonIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import useFetchMovies from "../hooks/fetchMovies";
import { useState } from "react";
import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function HomePage() {
  const [page, setPage] = useState(1);

  const { colorMode, toggleColorMode } = useColorMode();
  const { movies, isLoading } = useFetchMovies(page);

  // if (isLoading) return <Spinner />;

  return (
    <div className="App">
      <Flex justify={"center"}>
        <InputGroup flex={0}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input placeholder="Search Movies" size="md" width="2xl" />
          <InputRightElement
            onClick={() => {
              console.log("clicked");
            }}
            pointerEvents="none"
            children={<CloseIcon color="gray.300" />}
          />
        </InputGroup>
        <Button onClick={toggleColorMode} ml={"1"}>
          {colorMode === "light" ? (
            <MoonIcon color="black.500" />
          ) : (
            <SunIcon color="black.500" />
          )}
        </Button>
      </Flex>
      {/* <List margin={1}>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </List> */}

      <InfiniteScroll
        dataLength={movies.length}
        next={() => {
          setPage((currPage) => currPage + 1);
        }}
        hasMore={true}
        loader={<Loader />}
      >
        {/* loop in data from api using hook */}
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          gridGap={2}
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none" }}
            >
              <MovieCard movie={movie} />
            </Link>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </div>
  );
}

export default HomePage;
