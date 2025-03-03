import { createTheme } from "@mui/material/styles";

const breakpointValues = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
  }

const lightTheme = createTheme({
  breakpoints: {
    values: breakpointValues,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#CAE8FF",
    },
    secondary: {
      main: "#666",
    },
    background: {
      main: "#fff",
      paper: "#ffffff",
      hover: '#CAE8FF',
    },
    text: {
      primary: "#333",
    },
    border: {
      soft:'#ddd'
    },
  },
  typography: {
    fontFamily: "Helvetica",
  },
});

const darkTheme = createTheme({
  breakpoints: {
    values: breakpointValues,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#990000",
    },
    secondary: {
      main: "#ccc",
    },
    background: {
      default: "#181818",
      paper: "#1e1e1e",
      hover: '#D90000',
    },
    text: {
      primary: "#ddd",
    },
    border: {
      soft:'#333'
    },
  },
  typography: {
    fontFamily: "Helvetica",
  },
});

export { lightTheme, darkTheme };
