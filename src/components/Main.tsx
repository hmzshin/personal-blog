import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import "./css/Main.css";
import linkedin from "../assets/main/LinkedIn.svg";
import github from "../assets/main/github.svg";
import profilImg from "../assets/main/mainpage-profile.svg";

const Main = () => {
  const { language }: any = useContext(LanguageContextObject);
  return (
    <section className="flex items-center">
      <div>
        <label>
          {language.mainpage.header.theme}
          <input type="checkbox" />
        </label>
        <label>
          {language.mainpage.header.language}
          <input type="checkbox" />
        </label>
      </div>
      <div className="flex">
        <section className="flex w-2/4">
          {Object.values(language.mainpage.content).map(
            (item: any, index: number) =>
              index == 2 ? (
                <div>
                  <img src={linkedin} alt="linkedin" />
                  <img src={github} alt="github" />
                </div>
              ) : (
                <p className={`mainpage-p${index}`}>{item}</p>
              )
          )}
        </section>
        <section className="flex w-2/4">
          <div>
            <img src={profilImg} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Main;
