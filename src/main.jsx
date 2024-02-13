import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { ScrollProvider } from "./contexts/ScrollContext";
import { ThemeProvider } from "./contexts/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </ScrollProvider>
  </React.StrictMode>,
);
