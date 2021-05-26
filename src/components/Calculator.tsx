import React from "react";
import { Stack } from "@chakra-ui/react";
import InputNumber from "./InputNumber";

const Calculator = () => {
  return (
    <Stack alignItems="center" marginTop={6} width="100%">
      <InputNumber name="Number 1" />
      <InputNumber name="Number 2" />
    </Stack>
  );
};

export default Calculator;
