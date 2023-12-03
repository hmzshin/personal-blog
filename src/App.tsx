import "./App.css";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { languages } from "./data";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { DataContextObject } from "./context/DataContext";
import { LanguageContextObject } from "./context/LanguageContext";

function App() {
  const { dispatchData }: any = useContext(DataContextObject);
  const { language, dispatchLanguage }: any = useContext(LanguageContextObject);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", languages)
      .then(function (response) {
        console.log(response.data);
        dispatchData({ type: "SET_DATA", payload: { ...response.data } });
        const localLanguage = localStorage.getItem("language");
        const browserLanguage = navigator.language.includes("en") ? "en" : "tr";
        const initialData = localLanguage ? localLanguage : browserLanguage;
        const initialLanguage = Object.values(response.data).filter(
          (lang: any) => lang.code == initialData
        )[0];

        dispatchLanguage({ type: "initialize", payload: initialLanguage });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {language ? (
        <>
          <Main />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </>
      ) : (
        <div>yükleniyor</div>
      )}
    </>
  );
}
export default App;
