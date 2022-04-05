import { Spinner } from "@chakra-ui/react";
import { FC } from "react";
import "../App.css";
const loader: FC = () => (
  <Spinner
    className="App"
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  />
);

export default loader;
