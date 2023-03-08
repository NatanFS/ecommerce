import React from "react";
import {render} from "react-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import RoutesComponent from './routes';
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesComponent/>
    </ThemeProvider>
  );
}
  
export default App;

const appDiv = document.getElementById("app");
render(<App/>, appDiv)