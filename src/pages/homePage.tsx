import "../App.css";
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Input,
  useColorMode,
  InputGroup,
  Button,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
  Heading,
  Spinner,
  CloseButton,
  OrderedList,
  ListItem,
  List,
} from "@chakra-ui/react";

import { Search2Icon, MoonIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import Loader from "../components/activityIndicator";
import MovieCard from "../components/movieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import useFetchSearchMovie from "../hooks/useFetchSearchMovie";
import InfiniteScroll from "react-infinite-scroll-component";

function HomePage() {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
    setValue(event.target.value);

  const { colorMode, toggleColorMode } = useColorMode();
  const { movies, isLoading } = useFetchMovies(page);
  const { searchMovies } = useFetchSearchMovie(value);

  // if (isLoading) return <Spinner />;

  return (
    <div className="App">
      <Flex justify={"center"}>
        <Text mb="8px">Value: {value}</Text>
        <InputGroup flex={0}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            placeholder="Search Movies"
            size="md"
            width="2xl"
            value={value}
            onChange={handleChange}
          />
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
        {searchMovies.map((searchResult) => (
          <ListItem>{searchResult}</ListItem>
        ))}
      </List> */}

      <InfiniteScroll
        dataLength={movies.length}
        next={() => {
          setPage((currPage) => currPage + 1);
        }}
        hasMore={true}
        loader={false}
      >
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          gridGap={2}
        >
          {/* loop in data from api using hook */}
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
