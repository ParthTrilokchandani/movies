import React from "react";
import "./App.css";
import {
  Flex,
  Input,
  Box,
  useColorModeValue,
  Image,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { InputGroup, Button } from "@chakra-ui/react";
import { InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Flex justify={"center"}>
        <Button onClick={toggleColorMode} mt={5}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <InputGroup flex={0}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input placeholder="Search Movies" size="md" width="2xl" />
        </InputGroup>
      </Flex>

      <Box
        padding={"1px"}
        maxW={"250px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        textAlign={"center"}
        height={"380px"}
        borderBottomLeftRadius={"2xl"}
        borderBottomRightRadius={"2xl"}
        borderTopLeftRadius={"2xl"}
        borderTopRightRadius={"2xl"}
        // onMouseOver={}
      >
        <Image
          margin={"30px"}
          height={"280px"}
          src={
            "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
          }
          mb={4}
          pos={"relative"}
          // _after={{
          //   content: '""',
          //   w: 4,
          //   h: 4,
          //   bg: "green.300",
          //   border: "2px solid white",
          //   rounded: "full",
          //   pos: "absolute",
          //   bottom: 0,
          //   right: 3,
          // }}
        />
        <Heading fontSize={"14"} fontFamily={"body"}>
          Spider Man No Way To Home
        </Heading>
      </Box>
    </div>
  );
}

export default App;
