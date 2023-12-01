import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import "./css/Main.css";
import linkedin from "../assets/main/LinkedIn.svg";
import github from "../assets/main/github.svg";
import profilImg from "../assets/main/mainpage-profile.svg";

const Main = () => {
  const { language }: any = useContext(LanguageContextObject);
  return (
    <section id="mainpage" className="flex flex-col bg-zinc-100 relative">
      <div className="absolute -top-14 left-1/3 w-28 h-28 bg-zinc-300 rounded-full" />

      <div className="mt-20 self-end pr-40">
        <label className="text-neutral-500 text-base font-bold font-['Inter'] tracking-wider">
          {language.mainpage.header.theme}
          <input type="checkbox" />
        </label>
        <label>
          <span className="text-pink-600 text-base font-bold font-['Inter'] tracking-wider">
            {language.mainpage.header.language.strong}
          </span>
          <span className="text-neutral-500 text-base font-bold font-['Inter'] tracking-wider">
            {language.mainpage.header.language.span}
          </span>

          <input type="checkbox" />
        </label>
      </div>
      <div className="flex px-">
        <section id="content" className="flex flex-col w-2/4 ml-44 ">
          <p className="text-black text-3xl font-normal font-['Inter'] tracking-[3px]">
            {language.mainpage.content.p1}
          </p>
          <p className=" w-[666px] text-gray-950 text-[42px] font-medium font-['Inter'] leading-[64px] tracking-wide">
            {language.mainpage.content.p2}
          </p>
          <div className="flex gap-5">
            <img src={linkedin} alt="linkedin" />
            <img src={github} alt="github" />
          </div>
          <>{language.mainpage.content.p3}</>
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
