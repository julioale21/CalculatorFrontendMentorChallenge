import React from "react";
import { Stack, Grid, GridItem, Text } from "@chakra-ui/react";
import Display from "./Display";
import ButtonCalc from "./ButtonCalc";
import useCalculator from "./useCalculator";
import ThemeSwitch from "./ThemeSwitch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import {
  shadowBaseBtn1,
  shadowBaseBtn2,
  shadowEqualBtn1,
  shadowEqualBtn2,
  shadowResetBtn1,
  shadowResetBtn2,
} from "./shadowColors";

const Calculator = () => {
  let shadowBaseBtn, shadowResetBtn, shadowEqualBtn;
  const [data, handleClick] = useCalculator();
  const { themeNumber } = useContext(ThemeContext);

  switch (themeNumber) {
    case "1":
    case "2":
      shadowBaseBtn = shadowBaseBtn1;
      shadowResetBtn = shadowResetBtn1;
      shadowEqualBtn = shadowEqualBtn1;
      break;
    case "3":
      shadowBaseBtn = shadowBaseBtn2;
      shadowResetBtn = shadowResetBtn2;
      shadowEqualBtn = shadowEqualBtn2;
      break;
  }

  return (
    <Stack paddingBottom={12} paddingTop={6} width={{ base: "325px", md: "487px" }}>
      <Stack>
        <Stack direction="row" justifyContent="space-between" marginBottom={2}>
          <Text color="color_text_display" fontSize="2.1rem" fontWeight="bold">
            calc
          </Text>
          <ThemeSwitch />
        </Stack>

        <Display value={data} />

        <Stack
          backgroundColor="bg_keypad"
          borderRadius="5px"
          height={{ base: "420px" }}
          padding="1.6rem"
        >
          <Grid gap={3} templateColumns="repeat(4, 1fr)">
            <ButtonCalc shadow={shadowBaseBtn} value="7" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="8" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="9" onClickEvent={handleClick} />
            <ButtonCalc
              background="bg_btn_del"
              color="white"
              fontSize="xl"
              shadow={shadowResetBtn}
              value="DEL"
              onClickEvent={handleClick}
            />

            <ButtonCalc shadow={shadowBaseBtn} value="5" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="4" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="6" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="+" onClickEvent={handleClick} />

            <ButtonCalc shadow={shadowBaseBtn} value="1" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="2" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="3" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="-" onClickEvent={handleClick} />

            <ButtonCalc shadow={shadowBaseBtn} value="." onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="0" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="/" onClickEvent={handleClick} />
            <ButtonCalc shadow={shadowBaseBtn} value="x" onClickEvent={handleClick} />

            <GridItem colSpan={2}>
              <ButtonCalc
                background="bg_btn_del"
                color="white"
                fontSize="sm"
                shadow={shadowResetBtn}
                value="RESET"
                onClickEvent={handleClick}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <ButtonCalc
                background="bg_btn_equal"
                color="color_text_btn_equal"
                fontSize="xs"
                shadow={shadowEqualBtn}
                value="="
                onClickEvent={handleClick}
              />
            </GridItem>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Calculator;
