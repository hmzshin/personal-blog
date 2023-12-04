import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import LanguageContextProvider from "./context/LanguageContext.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import DataContextProvider from "./context/DataContext.tsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataContextProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <App />
          <ToastContainer
            position="top-left"
            hideProgressBar={true}
            newestOnTop={true}
            rtl={false}
            theme="colored"
          />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
