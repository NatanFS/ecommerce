import React from "react";
import {render} from "react-dom";
import HomePage from "./pages/HomePage";

function App() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
  
export default App;

const appDiv = document.getElementById("app");
render(<App/>, appDiv)