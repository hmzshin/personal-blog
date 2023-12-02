import { createContext, useState, useEffect } from "react";
import { languages } from "../data.ts";
import axios from "axios";

export const LanguageContextObject = createContext({});

const LanguageContextProvider = ({ children }: any) => {
  const [language, setLanguage] = useState(languages.english);
  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", languages)
      .then(function (response) {
        console.log(response.data);
        setLanguage(response.data.turkish);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
