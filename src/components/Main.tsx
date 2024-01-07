import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";
import linkedin from "../assets/main/LinkedIn.svg";
import linkedinDark from "../assets/main/LinkedIn-dark.png";
import github from "../assets/main/github.svg";
import githubDark from "../assets/main/github-dark.png";
import profilImg from "../assets/main/profilPic.png";

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
      className="bg-grayishYellow dark:bg-zinc-800 relative overflow-x-hidden customTransition"
    >
      <div
        id="decoration"
        className="w-[217px] h-[40px] bg-strongRed rounded-[20px] absolute bottom-3 -right-32 md:bottom-28 xl:bottom-16 "
      />
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex gap-8 mt-14 md:self-end md:pr-[10%]">
          <label className="flex items-center gap-3 ">
            <div className="inline-block w-14 h-6  bg-strongRed rounded-[100px] dark:bg-black relative customTransition ">
              <div className="w-4 h-4 bg-amber-200 rounded-full absolute top-1 right-1 dark:right-9 customTransition " />
              <div
                className="w-1 h-1 dark:w-[14px] dark:h-[14px] rounded-full  bg-amber-200 absolute  
               top-[10px] right-1 dark:top-1 dark:right-8 dark:bg-black customTransition"
              />
            </div>

            <span className="text-darkCyan dark:text-zinc-300 text-base font-bold font-sans tracking-wider">
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
              className="bg-grayishYellow rounded-lg block p-2.5 outline-none dark:bg-zinc-800 text-strongRed text-base font-bold font-sans text-left tracking-wider customTransition"
            >
              {options.map((option: any, index: number) => (
                <option key={index} value={option.value}>
                  {option.name.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex justify-center  flex-wrap lg:flex-nowrap py-10 xl:pb-32 px-[10%] xl:w-full  xl:justify-around gap-20 xl:gap-32">
          <section
            id="content"
            className="flex flex-col items-center md:items-start justify-center  gap-5 relative"
          >
            <div
              id="decoration"
              className="absolute top-[88px] -left-2 w-[100px] h-[25px] bg-strongRed rounded z-[0] xl:top-[120px] "
            />
            <div
              id="decoration"
              className="absolute -top-[200px] left-60 w-28 h-28 bg-darkCyan dark:bg-neutral-600 rounded-full customTransition"
            />
            <p className="text-darkCyan dark:text-white text-3xl font-normal font-sans tracking-[3px] xl:text-5xl customTransition">
              {content.p1}
            </p>
            <p className="  text-darkCyan  dark:text-white  text-4xl xl:text-5xl xl:leading-[80px] font-medium font-sans leading-[64px] tracking-wide z-[1] customTransition">
              {content.p2}
            </p>
            <div className="flex gap-5 xl:pt-10">
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
            <p className=" text-darkCyan  dark:text-white  text-base xl:text-xl font-normal font-sans leading-loose tracking-wide customTransition">
              {content.p3.p1}{" "}
              <span className=" text-strongRed">{content.p3.span1} </span>
              {content.p3.p2}{" "}
              <span className=" text-strongRed">{content.p3.span2} </span>
              {content.p3.p3} <br />
              {content.p3.p4}{" "}
              <a
                className=" text-strongRed"
                href={`mailto:${content.p3.span3}`}
              >
                {content.p3.span3}
              </a>
            </p>
          </section>
          <section className="flex items-center pb-10 lg:pb-0">
            <div className="w-[300px] h-[300px] rounded-full xl:w-[450px] xl:h-[450px] shadow-[10px_10px_0px_0px] shadow-strongRed relative">
              <img
                className="w-full h-full rounded-full  object-cover object-top "
                src={profilImg}
              />
            </div>
          </section>
        </div>
      </div>
      <div
        id="decoration"
        className=" w-full h-[2px] bg-darkCyan dark:bg-transparent "
      />
    </section>
  );
};

export default Main;
