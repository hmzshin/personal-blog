import { createContext, useContext, useReducer } from "react";
import { DataContextObject } from "./DataContext";
import { toast } from "react-toastify";

export const LanguageContextObject = createContext({});

const LanguageContextProvider = ({ children }: any) => {
  const { data }: any = useContext(DataContextObject);
  function languageReducer(state: object, action: any) {
    switch (action.type) {
      case "en":
        toast.success(data.english.changeLanguage);
        localStorage.setItem("language", "en");
        return { ...data.english };

      case "tr":
        toast.success(data.turkish.changeLanguage);
        localStorage.setItem("language", "tr");
        return { ...data.turkish };

      case "es":
        toast.success(data.spanish.changeLanguage);
        localStorage.setItem("language", "es");
        return { ...data.spanish };

      case "INITIALIZE_LANGUAGE":
        return { ...action.payload };

      default:
        return state;
    }
  }
  const [language, dispatchLanguage] = useReducer(languageReducer, null);

  return (
    <LanguageContextObject.Provider value={{ language, dispatchLanguage }}>
      {children}
    </LanguageContextObject.Provider>
  );
};

export default LanguageContextProvider;
