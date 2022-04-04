import "./App.css";
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
} from "@chakra-ui/react";

import { Search2Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import useFetchMovies from "./hooks/fetchMovies";
import { useState } from "react";
import MovieCard from "./components/movieCard";

function App() {
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

          <Button onClick={toggleColorMode} ml={"1"}>
            {colorMode === "light" ? (
              <MoonIcon color="black.500" />
            ) : (
              <SunIcon color="black.500" />
            )}
          </Button>
          {colorMode === "light" ? "Dark" : "Light"}
        </InputGroup>
      </Flex>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 5 }} gridGap={2}>
        {movies.map((movie) => (
          <MovieCard movie={movie}></MovieCard>
        ))}
      </SimpleGrid>
      <Flex justify={"center"}>
        <Heading
          m={"5"}
          fontSize={"15"}
          float={"right"}
          onClick={() => {
            setPage((currPage) => currPage + 1);
            console.log("clicked");
          }}
          _hover={{ cursor: "pointer", color: "blue" }}
        >
          Click for more results
        </Heading>
      </Flex>
    </div>
  );
}

export default App;
