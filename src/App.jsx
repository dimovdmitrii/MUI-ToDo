import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header";
import FullWidthTabs from "./components/filters";
import CustomizedInputBase from "./components/searchBar";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#6750A4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#6750A40D",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontStyle: "normal",
    h1: {
      fontWeight: 500,
      fontSize: 20,
    },
    h2: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: 0.1,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Header></Header>
      <CustomizedInputBase></CustomizedInputBase>
      <FullWidthTabs></FullWidthTabs>
    </ThemeProvider>
  );
}

export default App;
