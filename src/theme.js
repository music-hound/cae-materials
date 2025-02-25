import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Синий
    },
    secondary: {
      main: "#666", // Розовый
    },
    background: {
      default: "#f4f6f8", // Светлый фон
      dashboard:'#1976d2',
      paper: "#ffffff", // Белый для карточек и модальных окон
    },
    text: {
      primary: "#000000", // Чёрный текст
      secondary: "#555555", // Тёмно-серый текст
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Светло-синий
    },
    secondary: {
      main: "#ccc", // Розовый
    },
    background: {
      default: "#121212", // Тёмный фон
      dashboard:'#1976d2',
      paper: "#1e1e1e", // Тёмный фон для карточек и модальных окон
    },
    text: {
      primary: "#ffffff", // Белый текст
      secondary: "#aaaaaa", // Светло-серый текст
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
});

export { lightTheme, darkTheme };
