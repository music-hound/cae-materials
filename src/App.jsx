import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Layout from './pages/Layout';
import Materials from "./pages/Materials";
import ErrorPage from './pages/ErrorPage';
import Studies from './pages/Studies';
import GostCalc from './pages/GostCalc';
import Projects from './pages/Projects';

function App() {

  const isLight = useSelector( (state) => state.isLight );

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router
      basename={`${import.meta.env.BASE_URL}`}
      >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Materials />} />
            <Route path="projects" element={<Projects />} />
            <Route path="studies" element={<Studies />} />
            <Route path="calc" element={<GostCalc />} />
            <Route path="404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
