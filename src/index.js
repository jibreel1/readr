import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
   typography: {
      fontFamily: "Lato, sans-serif",
   },
});

root.render(
   <Router>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </Router>
);
