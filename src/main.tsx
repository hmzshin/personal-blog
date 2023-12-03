import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LanguageContextProvider from "./context/LanguageContext.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import DataContextProvider from "./context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataContextProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
