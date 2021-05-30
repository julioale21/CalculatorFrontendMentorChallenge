import React, { useContext } from "react";
import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext";

const ThemeSwitch = () => {
  const { themeNumber, setThemeNumber } = useContext(ThemeContext);

  const handleChange = (e) => {
    setThemeNumber(e);
  };

  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end" width="100">
        <Stack direction="row" justifyContent="space-between" paddingX={3} width="70px">
          <Text fontSize="sm" fontWeight="bold" textColor="color_text_display">
            1
          </Text>
          <Text fontSize="sm" fontWeight="bold" textColor="color_text_display">
            2
          </Text>
          <Text fontSize="sm" fontWeight="bold" textColor="color_text_display">
            3
          </Text>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={6}>
        <Text fontWeight="bold" textColor="color_text_display">
          THEME
        </Text>
        <Stack alignItems="center" direction="row" justifyContent="center">
          <RadioGroup value={themeNumber} onChange={(e) => handleChange(e)}>
            <Stack
              alignItems="center"
              backgroundColor="bg_keypad"
              direction="row"
              height="27px"
              paddingX={1}
              rounded="xl"
              spacing={1}
              width="70px"
            >
              <Radio
                _checked={{ borderColor: "bg_toggle", bg: "bg_toggle" }}
                borderColor="bg_keypad"
                value="1"
              ></Radio>
              <Radio
                _checked={{ borderColor: "bg_toggle", bg: "bg_toggle" }}
                borderColor="bg_keypad"
                value="2"
              ></Radio>
              <Radio
                _checked={{ borderColor: "bg_toggle", bg: "bg_toggle" }}
                borderColor="bg_keypad"
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
