import { Stack } from "@chakra-ui/react";
import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <Stack alignItems="center" marginTop={6}>
      <h1>Calculator</h1>
      <hr />
      <Calculator />
    </Stack>
  );
};

export default App;
