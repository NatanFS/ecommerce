import React from "react";
import {render} from "react-dom";

function App() {
    return (
      <div>
        <h1 className="text-purple-700">Hello, World!</h1>
      </div>
    );
  }
  
export default App;

const appDiv = document.getElementById("app");
render(<App/>, appDiv)