import { createContext, useState } from "react";
import { languages } from "../data";

export const LanguageContextObject = createContext({});

const LanguageContextProvider = ({ children }: any) => {
  const [language, setLanguage] = useState(languages.english);

  function changeLanguage(value: any) {
    setLanguage(value);
  }

  return (
    <LanguageContextObject.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContextObject.Provider>
  );
};

export default LanguageContextProvider;
