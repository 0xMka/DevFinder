import { createContext } from "react";

export const ThemeModeContext = createContext("dark");

export const THEME = {
  light: {
    textColor: "#2B3442",
    ToggleTextColorHovered: "#222731",
    ToggletTextColorNotHovered: "#4B6A9B",
    backgroundColor: "#FEFEFE",
    backgroundColorBody: "#F6F8FF",
    boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  },
  dark: {
    textColor: "#FFFFFF",
    ToggleTextColorHovered: "#90A4D4",
    ToggletTextColorNotHovered: "#FFFFFF",
    backgroundColor: "#1E2A47",
    backgroundColorBody: "#141D2F",
  },
};
