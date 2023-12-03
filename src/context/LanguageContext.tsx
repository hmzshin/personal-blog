import { createContext, useContext, useReducer } from "react";
import { DataContextObject } from "./DataContext";

export const LanguageContextObject = createContext({});

const LanguageContextProvider = ({ children }: any) => {
  const { data }: any = useContext(DataContextObject);
  function languageReducer(state: object, action: any) {
    switch (action.type) {
      case "en":
        localStorage.setItem("language", "en");
        return { ...data.english };

      case "tr":
        localStorage.setItem("language", "tr");
        return { ...data.turkish };

      case "initialize":
        return { ...action.payload };

      default:
        return state;
    }
  }
  const [language, dispatchLanguage] = useReducer(languageReducer);

  return (
    <LanguageContextObject.Provider value={{ language, dispatchLanguage }}>
      {children}
    </LanguageContextObject.Provider>
  );
};

export default LanguageContextProvider;
