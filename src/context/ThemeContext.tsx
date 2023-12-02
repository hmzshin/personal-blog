import { createContext, useState } from "react";

export const ThemeContextObject = createContext({});

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");

  function changeTheme(value: any) {
    setTheme(value);
  }

  return (
    <ThemeContextObject.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContextObject.Provider>
  );
};

export default ThemeContextProvider;
