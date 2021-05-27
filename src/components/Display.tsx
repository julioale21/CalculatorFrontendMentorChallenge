import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface DisplayProps {
  value: number;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <Box backgroundColor="gray.800" borderRadius="5px" marginBottom={4} padding={3} width="100%">
      <Text color="white" float="right" fontSize="4xl" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

export default Display;
