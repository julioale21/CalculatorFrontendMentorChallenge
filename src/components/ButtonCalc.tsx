import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  color?: string;
  value: string;
  shadowColor?: string;
  fontSize?: string;
  background?: string;
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCalc: React.FC<ButtonProps> = ({
  value,
  color = "gray.600",
  shadowColor = "gray",
  fontSize = "3xl",
  background,
  onClickEvent,
}) => {
  const hover = background ? background + ".500" : "gray.400";

  return (
    <Button
      _hover={{ bg: hover }}
      backgroundColor={background}
      boxShadow={`1px 5px ${shadowColor}`}
      color={color}
      fontSize={fontSize}
      fontWeight="bold"
      height={{ base: "3.8rem" }}
      value={value}
      width="full"
      onClick={onClickEvent}
    >
      {value}
    </Button>
  );
};

export default ButtonCalc;
