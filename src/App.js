import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoutes />
        <PublicRoutes />
      </BrowserRouter>
   
    </div>
  );
}

export default App;
