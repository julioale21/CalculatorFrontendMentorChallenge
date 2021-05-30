import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <Box
      backgroundColor="bg_screen"
      borderRadius="5px"
      height="5.5rem"
      marginBottom={4}
      overflow="hidden"
      padding={3}
      width="100%"
    >
      <Text color="color_text_display" float="right" fontSize="2.1rem" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

export default Display;
