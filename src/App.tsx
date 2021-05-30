import React, { useState } from "react";
import Calculator from "./components/Calculator";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import theme from "./themes/theme";
import theme2 from "./themes/theme2";
import { ThemeContext } from "./ThemeContext";
import theme3 from "./themes/theme3";

const App = () => {
  const [themeNumber, setThemeNumber] = useState("1");

  let currentTheme;

  switch (themeNumber) {
    case "1":
      currentTheme = theme;
      break;
    case "2":
      currentTheme = theme2;
      break;
    case "3":
      currentTheme = theme3;
  }

  return (
    <ThemeContext.Provider value={{ themeNumber, setThemeNumber }}>
      <ChakraProvider theme={currentTheme}>
        <Stack alignItems="center" backgroundColor="bg_main" height="full" minHeight="600px">
          <Calculator />
        </Stack>
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default App;
