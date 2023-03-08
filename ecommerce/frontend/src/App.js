import React from "react";
import {render} from "react-dom";
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}
  
export default App;

const appDiv = document.getElementById("app");
render(<App/>, appDiv)