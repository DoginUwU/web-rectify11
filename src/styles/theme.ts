import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: {
      blue: "#0078D8",
    },
    gray: {
      "10": "#575757",
      "30": "#262626",
    },
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

export { lightTheme };
