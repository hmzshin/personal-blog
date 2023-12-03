import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import linkedin from "../assets/main/LinkedIn.svg";
import linkedinDark from "../assets/main/LinkedIn-dark.png";
import github from "../assets/main/github.svg";
import githubDark from "../assets/main/github-dark.png";
import profilImg from "../assets/main/mainpage-profile.svg";
import rectangle from "../assets/main/Rectangle 18.png";
import { ThemeContextObject } from "../context/ThemeContext";

const Main = () => {
  const { language, dispatchLanguage }: any = useContext(LanguageContextObject);
  const { theme, dispatchTheme }: any = useContext(ThemeContextObject);
  const { header, content } = language.mainpage;

  function toggleTheme() {
    if (theme == "light") {
      dispatchTheme({ type: "SET_DARK_MODE" });
    } else {
      dispatchTheme({ type: "SET_LIGHT_MODE" });
    }
  }
  function toggleLanguage() {
    if (language.code == "en") {
      dispatchLanguage({ type: "tr" });
    } else {
      dispatchLanguage({ type: "en" });
    }
  }

  return (
    <section id="mainpage" className="bg-zinc-100 dark:bg-zinc-800">
      <div className="flex flex-col items-center justify-center relative ">
        <div className="flex gap-8 mt-20">
          <label className="flex items-center gap-3 ">
            {theme == "light" ? (
              <div className="inline-block w-[55px] h-6  bg-pink-600  rounded-[100px] relative transition-all duration-300 ease-linear ">
                <div className="w-[15px] h-4 bg-amber-200 rounded-full absolute top-1 right-1 transition-all duration-300 ease-in-out " />
                <div className="w-[15px] h-4 rounded-full absolute top-1 left-[10px] transition-all" />
              </div>
            ) : (
              <div className="inline-block w-[55px] h-6  rounded-[100px] bg-black relative transition-all duration-300 ease-in-out ">
                <div className="w-[15px] h-4  bg-amber-200 rounded-full absolute top-1 left-1 " />
                <div className="w-[15px] h-4  rounded-full bg-black absolute top-1 left-[10px] transition-all duration-300 ease-linear  " />
              </div>
            )}

            <span className="text-neutral-500 text-base font-bold font-['Inter'] tracking-wider">
              {theme.toUpperCase()} MODE
            </span>

            <input
              name="theme"
              type="checkbox"
              className="invisible"
              onClick={toggleTheme}
            />
          </label>

          <label>
            <span className="text-pink-600 text-base font-bold font-['Inter'] tracking-wider">
              {header.language.strong}
            </span>
            {/* <span className="text-neutral-500 text-base font-bold font-['Inter'] tracking-wider">
              {header.language.span}
            </span> */}

            <input
              name="language"
              type="checkbox"
              className="invisible"
              onClick={toggleLanguage}
            />
          </label>
        </div>
        <div className="flex justify-center flex-wrap py-10 px-[10%] gap-10">
          <section
            id="content"
            className="flex flex-col items-center justify-center min-w-2/4 gap-5 relative"
          >
            <div
              id="decoration"
              className="absolute top-[88px] -left-2 w-[100px] h-[25px] bg-pink-600 rounded z-[0] "
            />
            <div
              id="decoration"
              className="absolute -top-[200px] left-60 w-28 h-28 bg-zinc-300 rounded-full"
            />
            <p className="text-black dark:text-white text-2xl font-normal font-['Inter'] tracking-[3px]">
              {content.p1}
            </p>
            <p className="  text-gray-950  dark:text-white  text-3xl font-medium font-['Inter'] leading-[64px] tracking-wide z-[1]">
              {content.p2}
            </p>
            <div className="flex gap-5">
              <img
                src={theme == "dark" ? linkedinDark : linkedin}
                alt="linkedin"
              />
              <img src={theme == "dark" ? githubDark : github} alt="github" />
            </div>
            <p className=" text-black  dark:text-white  text-base font-normal font-['Inter'] leading-loose tracking-wide">
              {content.p3.p1}{" "}
              <span className=" text-rose-700">{content.p3.span1} </span>
              {content.p3.p2}{" "}
              <span className=" text-rose-700">{content.p3.span2} </span>
              {content.p3.p3} <br />
              {content.p3.p4}{" "}
              <span className=" text-rose-700">{content.p3.span2}</span>
            </p>
          </section>
          <section className="flex items-center">
            <div className="w-[195px] h-[195px] bg-pink-600 rounded-[16px] relative">
              <img className="absolute top-2 left-2" src={profilImg} />
            </div>
            <img className="absolute bottom-14 right-0 w-20" src={rectangle} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Main;
