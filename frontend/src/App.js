import React from "react";
import {render} from "react-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import RoutesComponent from './routes';
import { AuthProvider } from "./services/autenticacao";
const theme = createTheme();

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RoutesComponent/>
      </ThemeProvider>
    </AuthProvider>
  );
}
  
export default App;

const appDiv = document.getElementById("app");
render(<App/>, appDiv)