import { useState } from "react";

const useCalculator = (): [string, (e: React.MouseEvent<HTMLButtonElement>) => void] => {
  const [data, setData] = useState("0");

  const calculate = () => {
    try {
      const result: number = eval(data.replace("x", "*"));

      setData(String(result).substring(0, 9));
    } catch (error) {
      setData(String("NaN"));
    }
  };

  const handleClick = (e) => {
    const value = e.target.value;

    switch (value) {
      case "RESET":
        setData("0");
        break;
      case "DEL":
        setData(data.slice(0, -1));
        break;
      case "=":
        calculate();
        break;
      default:
        const ops = ["+", "-", "x", "/"];
        let newData;

        if (data === "NaN") {
          setData(String(value));
          break;
        }

        if (data.charAt(data.length - 1) === "/" && value === "0") {
          alert("Cannot devide by 0");
          break;
        }

        newData = data.charAt(0) === "0" && value !== "." ? data.substring(1) : data;

        if (
          ops.includes(data.charAt(data.length - 2)) &&
          data.charAt(data.length - 1) === "0" &&
          value !== "."
        ) {
          newData = newData.substring(0, data.length - 1) + newData.substring(data.length);
        }

        setData(newData + value);
    }
  };

  return [data, handleClick];
};

export default useCalculator;
