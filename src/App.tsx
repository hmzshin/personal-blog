import "./App.css";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { useContext, useEffect } from "react";
import { LanguageContextObject } from "./context/LanguageContext";
import axios from "axios";
import { languages } from "./data";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const { language, changeLanguage }: any = useContext(LanguageContextObject);
  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", languages)
      .then(function (response) {
        changeLanguage(response.data.english);
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
