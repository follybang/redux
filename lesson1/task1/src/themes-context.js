import React from "react";

export const themes = {
  light: {
    fontColor: "#000000",
    background: "#eeeeee",
  },
  dark: {
    fontColor: "#ffffff",
    background: "#222222",
  },
};

export const ThemesContext = React.createContext(themes.dark);
