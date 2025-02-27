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
      main: "#fff",
    },
    secondary: {
      main: "#666",
    },
    background: {
      main: "#fff",
      paper: "#ffffff",
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
      main: "#181818",
    },
    secondary: {
      main: "#ccc",
    },
    background: {
      main: "#181818",
      paper: "#1e1e1e",
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
