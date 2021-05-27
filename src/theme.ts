import { extendTheme } from "@chakra-ui/react";

const components = {
  button: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "light" ? "white" : "black",
    }),
  },
};

export default extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  components,
});
