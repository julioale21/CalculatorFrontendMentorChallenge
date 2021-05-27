import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface DisplayProps {
  value: number;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <Box
      backgroundColor="gray.800"
      borderRadius="5px"
      height="5.5rem"
      marginBottom={4}
      padding={3}
      width="100%"
    >
      <Text color="white" float="right" fontSize="2.1rem" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

export default Display;
