import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ThemeSwitch = () => {
  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end" width="100">
        <Stack direction="row" justifyContent="space-between" paddingX={3} width="70px">
          <Text fontSize="sm" textColor="white">
            1
          </Text>
          <Text fontSize="sm" textColor="white">
            2
          </Text>
          <Text fontSize="sm" textColor="white">
            3
          </Text>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={6}>
        <Text fontWeight="bold" textColor="white">
          THEME
        </Text>
        <Stack alignItems="center" direction="row" justifyContent="center">
          <RadioGroup>
            <Stack
              alignItems="center"
              backgroundColor="gray.800"
              direction="row"
              height="27px"
              paddingX={1}
              rounded="xl"
              spacing={1}
              width="70px"
            >
              <Radio
                _checked={{ borderColor: "red", bg: "red" }}
                borderColor="gray.800"
                value="1"
              ></Radio>
              <Radio
                _checked={{ borderColor: "red", bg: "red" }}
                borderColor="gray.800"
                value="2"
              ></Radio>
              <Radio
                _checked={{ borderColor: "red", bg: "red" }}
                borderColor="gray.800"
                value="3"
              ></Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ThemeSwitch;
