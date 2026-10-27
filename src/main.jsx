import { BrowserRouter } from 'react-router-dom'
import "./styles/global.css";
import ReactDOM from 'react-dom/client' 
import React from "react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      
    <App />

    </BrowserRouter>
  </React.StrictMode>,
);
