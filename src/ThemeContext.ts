import { createContext } from "react";

type ThemeValues = {
  themeNumber: string;
  setThemeNumber: (theme: string) => void;
};
export const ThemeContext = createContext<ThemeValues>({
  themeNumber: "1",
  setThemeNumber: () => {},
});
