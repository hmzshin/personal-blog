import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";
import linkedin from "../assets/main/LinkedIn.svg";
import linkedinDark from "../assets/main/LinkedIn-dark.png";
import github from "../assets/main/github.svg";
import githubDark from "../assets/main/github-dark.png";
import profilImg from "../assets/main/mainpage-profile.svg";

const Main = () => {
  const { language, dispatchLanguage }: any = useContext(LanguageContextObject);
  const { theme, dispatchTheme }: any = useContext(ThemeContextObject);
  const { header, content } = language.mainpage;

  const options = [
    { name: "english", value: "en" },
    { name: "türkçe", value: "tr" },
    { name: "español", value: "es" },
  ];

  function toggleTheme() {
    if (theme == "light") {
      dispatchTheme({ type: "SET_DARK_MODE" });
    } else {
      dispatchTheme({ type: "SET_LIGHT_MODE" });
    }
  }
  function selectLanguage(value: any) {
    dispatchLanguage({ type: value });
  }

  return (
    <section
      id="mainpage"
      className="bg-zinc-100 dark:bg-zinc-800 relative overflow-x-hidden customTransition"
    >
      <div
        id="decoration"
        className="w-[217px] h-[40px] bg-pink-600 rounded-[20px] absolute bottom-3 -right-32 md:bottom-28 lg:bottom-16 "
      />
      <div className="flex flex-col items-center justify-center relative xl:w-[1280px] xl:m-auto ">
        <div className="flex gap-8 mt-20 md:self-end md:pr-[10%]">
          <label className="flex items-center gap-3 ">
            <div className="inline-block w-14 h-6  bg-pink-600 rounded-[100px] dark:bg-black relative customTransition ">
              <div className="w-4 h-4 bg-amber-200 rounded-full absolute top-1 right-1 dark:right-9 customTransition " />
              <div
                className="w-1 h-1 dark:w-[14px] dark:h-[14px] rounded-full  bg-amber-200 absolute  
               top-[10px] right-1 dark:top-1 dark:right-8 dark:bg-black customTransition"
              />
            </div>

            <span className="text-neutral-500 text-base font-bold font-['Inter'] tracking-wider">
              {theme == "dark" ? header.themeDark : header.themeLight}
            </span>

            <input
              name="theme"
              type="checkbox"
              className="invisible"
              onClick={toggleTheme}
            />
          </label>

          <label>
            <select
              name="language"
              onChange={(e) => selectLanguage(e.target.value)}
              value={language.code}
              className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500    text-pink-600 text-base font-bold font-['Inter'] tracking-wider customTransition"
            >
              {options.map((option: any, index: number) => (
                <option key={index} value={option.value}>
                  {option.name.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex justify-center flex-wrap md:flex-nowrap py-10 px-[10%] gap-10">
          <section
            id="content"
            className="flex flex-col items-center md:items-start justify-center min-w-2/4 gap-5 relative"
          >
            <div
              id="decoration"
              className="absolute top-[88px] -left-2 w-[100px] h-[25px] bg-pink-600 rounded z-[0] "
            />
            <div
              id="decoration"
              className="absolute -top-[200px] left-60 w-28 h-28 bg-zinc-300 rounded-full"
            />
            <p className="text-black dark:text-white text-2xl font-normal font-['Inter'] tracking-[3px] customTransition">
              {content.p1}
            </p>
            <p className="  text-gray-950  dark:text-white  text-3xl font-medium font-['Inter'] leading-[64px] tracking-wide z-[1] customTransition">
              {content.p2}
            </p>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/">
                <img
                  src={theme == "dark" ? linkedinDark : linkedin}
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/hmzshin">
                {" "}
                <img src={theme == "dark" ? githubDark : github} alt="github" />
              </a>
            </div>
            <p className=" text-black  dark:text-white  text-base font-normal font-['Inter'] leading-loose tracking-wide customTransition">
              {content.p3.p1}{" "}
              <span className=" text-rose-700">{content.p3.span1} </span>
              {content.p3.p2}{" "}
              <span className=" text-rose-700">{content.p3.span2} </span>
              {content.p3.p3} <br />
              {content.p3.p4}{" "}
              <a className=" text-rose-700" href={`mailto:${content.p3.span3}`}>
                {content.p3.span3}
              </a>
            </p>
          </section>
          <section className="flex items-center">
            <div className="w-[195px] h-[195px] bg-pink-600 rounded-[16px] relative">
              <img className="absolute top-2 left-2" src={profilImg} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Main;
