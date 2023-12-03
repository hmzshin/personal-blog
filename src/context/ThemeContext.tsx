import { createContext, useReducer } from "react";

export const ThemeContextObject = createContext({});

const ThemeContextProvider = ({ children }: any) => {
  function themeReducer(state: any, action: any) {
    switch (action.type) {
      case "SET_DARK_MODE":
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        return "dark";

      case "SET_LIGHT_MODE":
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        return "light";
      case "INITIALIZE_THEME":
        return action.payload;
      default:
        return state;
    }
  }

  const [theme, dispatchTheme] = useReducer(themeReducer, null);

  return (
    <ThemeContextObject.Provider value={{ theme, dispatchTheme }}>
      {children}
    </ThemeContextObject.Provider>
  );
};

export default ThemeContextProvider;
