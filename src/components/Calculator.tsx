import React from "react";
import { Stack, Grid, GridItem, Text } from "@chakra-ui/react";
import Display from "./Display";
import ButtonCalc from "./ButtonCalc";

const Calculator = () => {
  return (
    <Stack width={{ base: "325px" }}>
      <Stack paddingTop={24}>
        <Stack direction="row" justifyContent="space-between" marginBottom={2}>
          <Text color="white" fontSize="2.1rem" fontWeight="bold">
            calc
          </Text>
          <Text color="red">Toggle theme</Text>
        </Stack>

        <Display value={399.981} />

        <Stack
          backgroundColor="gray.800"
          borderRadius="5px"
          height={{ base: "420px" }}
          padding="1.6rem"
        >
          <Grid gap={3} templateColumns="repeat(4, 1fr)">
            <ButtonCalc value="7" />
            <ButtonCalc value="8" />
            <ButtonCalc value="9" />
            <ButtonCalc
              background="blue.700"
              color="white"
              fontSize="xl"
              shadowColor="#0c4271"
              value="DEL"
            />

            <ButtonCalc value="4" />
            <ButtonCalc value="5" />
            <ButtonCalc value="6" />
            <ButtonCalc value="+" />

            <ButtonCalc value="1" />
            <ButtonCalc value="2" />
            <ButtonCalc value="3" />
            <ButtonCalc value="-" />

            <ButtonCalc value="." />
            <ButtonCalc value="0" />
            <ButtonCalc value="/" />
            <ButtonCalc value="x" />

            <GridItem colSpan={2}>
              <ButtonCalc
                background="blue.700"
                color="white"
                fontSize="sm"
                shadowColor="#0c4271"
                value="RESET"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <ButtonCalc
                background="red.500"
                color="white"
                fontSize="xs"
                shadowColor="#962d2d"
                value="="
              />
            </GridItem>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Calculator;
