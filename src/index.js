import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
   typography: {
      fontFamily: "Lato, sans-serif",
   },
});

root.render(
   <AuthContextProvider>
      <Router>
         {/* <ChatContextProvider> */}
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
         {/* </ChatContextProvider> */}
      </Router>
   </AuthContextProvider>
);
