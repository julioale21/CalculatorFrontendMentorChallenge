import React from "react";
import { Button } from "@chakra-ui/react";
interface ButtonProps {
  color?: string;
  value: string;
  shadow?: string;
  fontSize?: string;
  background?: string;
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCalc: React.FC<ButtonProps> = ({
  value,
  color = "color_text_button",
  shadow = "btn",
  fontSize = "3xl",
  background = "bg_base_key",
  onClickEvent,
}) => {
  return (
    <Button
      _focus={{
        otline: "none",
      }}
      backgroundColor={background}
      boxShadow={`1px 5px ${shadow}`}
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
