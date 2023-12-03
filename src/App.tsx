import "./App.css";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { useContext, useEffect } from "react";
import axios from "axios";
import { languages } from "./data";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { DataContextObject } from "./context/DataContext";
import { LanguageContextObject } from "./context/LanguageContext";
import { ThemeContextObject } from "./context/ThemeContext";

function App() {
  const { dispatchData }: any = useContext(DataContextObject);
  const { language, dispatchLanguage }: any = useContext(LanguageContextObject);
  const { dispatchTheme }: any = useContext(ThemeContextObject);

  useEffect(() => {
    const localLanguage = localStorage.getItem("language");
    const browserLanguage = navigator.language.split("-")[0];
    const initialData = localLanguage ? localLanguage : browserLanguage;
    const initialLanguage = Object.values(languages).filter(
      (lang: any) => lang.code == initialData
    )[0];
    axios
      .post("https://reqres.in/api/users", languages)
      .then(function (response) {
        console.log(response.data);
        dispatchData({ type: "SET_DATA", payload: { ...response.data } });
        dispatchLanguage({
          type: "INITIALIZE_LANGUAGE",
          payload: initialLanguage,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const browserTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    console.log("local theme>", localTheme);
    console.log("browser theme>", browserTheme);
    if ((localTheme && localTheme == "dark") || (!localTheme && browserTheme)) {
      document.documentElement.classList.add("dark");
      dispatchTheme({ type: "INITIALIZE_THEME", payload: "dark" });
    } else {
      document.documentElement.classList.remove("dark");
      dispatchTheme({ type: "INITIALIZE_THEME", payload: "light" });
    }
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
