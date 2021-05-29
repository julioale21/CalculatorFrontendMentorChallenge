import React from "react";
import { Stack, Grid, GridItem, Text } from "@chakra-ui/react";
import Display from "./Display";
import ButtonCalc from "./ButtonCalc";
import useCalculator from "./useCalculator";

const Calculator = () => {
  const [data, handleClick] = useCalculator();

  return (
    <Stack width={{ base: "325px", md: "487px" }}>
      <Stack paddingTop={24}>
        <Stack direction="row" justifyContent="space-between" marginBottom={2}>
          <Text color="white" fontSize="2.1rem" fontWeight="bold">
            calc
          </Text>
          <Text color="red">Toggle theme</Text>
        </Stack>

        <Display value={data} />

        <Stack
          backgroundColor="gray.800"
          borderRadius="5px"
          height={{ base: "420px" }}
          padding="1.6rem"
        >
          <Grid gap={3} templateColumns="repeat(4, 1fr)">
            <ButtonCalc value="7" onClickEvent={handleClick} />
            <ButtonCalc value="8" onClickEvent={handleClick} />
            <ButtonCalc value="9" onClickEvent={handleClick} />
            <ButtonCalc
              background="blue.700"
              color="white"
              fontSize="xl"
              shadowColor="#0c4271"
              value="DEL"
              onClickEvent={handleClick}
            />

            <ButtonCalc value="5" onClickEvent={handleClick} />
            <ButtonCalc value="4" onClickEvent={handleClick} />
            <ButtonCalc value="6" onClickEvent={handleClick} />
            <ButtonCalc value="+" onClickEvent={handleClick} />

            <ButtonCalc value="1" onClickEvent={handleClick} />
            <ButtonCalc value="2" onClickEvent={handleClick} />
            <ButtonCalc value="3" onClickEvent={handleClick} />
            <ButtonCalc value="-" onClickEvent={handleClick} />

            <ButtonCalc value="." onClickEvent={handleClick} />
            <ButtonCalc value="0" onClickEvent={handleClick} />
            <ButtonCalc value="/" onClickEvent={handleClick} />
            <ButtonCalc value="x" onClickEvent={handleClick} />

            <GridItem colSpan={2}>
              <ButtonCalc
                background="blue.700"
                color="white"
                fontSize="sm"
                shadowColor="#0c4271"
                value="RESET"
                onClickEvent={handleClick}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <ButtonCalc
                background="red.500"
                color="white"
                fontSize="xs"
                shadowColor="#962d2d"
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
