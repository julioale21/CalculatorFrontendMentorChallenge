import React from "react";
import Calculator from "./components/Calculator";
import { Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Stack alignItems="center" backgroundColor="blue.800" height="full" paddingBottom={12}>
      <Calculator />
    </Stack>
  );
};

export default App;
