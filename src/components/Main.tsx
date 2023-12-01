import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import "./css/Main.css";
import linkedin from "../assets/main/LinkedIn.svg";
import github from "../assets/main/github.svg";
import profilImg from "../assets/main/mainpage-profile.svg";
import rectangle from "../assets/main/Rectangle 18.png";

const Main = () => {
  const { language }: any = useContext(LanguageContextObject);
  return (
    <section
      id="mainpage"
      className=" flex justify-center items-center bg-zinc-100 "
    >
      <div className="flex flex-col items-center justify-center relative ">
        <img className="absolute bottom-14 right-0" src={rectangle} />
        <div className="flex gap-8 mt-20 ">
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
        <div className="flex justify-center  flex-wrap py-10 px-5">
          <section
            id="content"
            className="flex flex-col items-center min-w-2/4 gap-5 relative"
          >
            <div className="absolute -top-[200px] left-60 w-28 h-28 bg-zinc-300 rounded-full" />
            <div className="absolute top-24 -left-2 w-[148px] h-[31px] bg-pink-600 rounded z-[0] " />
            <p className="text-black text-3xl font-normal font-['Inter'] tracking-[3px]">
              {language.mainpage.content.p1}
            </p>
            <p className="  text-gray-950 text-[42px] font-medium font-['Inter'] leading-[64px] tracking-wide z-[1]">
              {language.mainpage.content.p2}
            </p>
            <div className="flex gap-5">
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="github" />
            </div>
            <p className=" text-black text-lg font-normal font-['Inter'] leading-loose tracking-wide">
              {language.mainpage.content.p3.p1}{" "}
              <span className=" text-rose-700">
                {" "}
                {language.mainpage.content.p3.span1}
              </span>
              {language.mainpage.content.p3.p2}{" "}
              <span className=" text-rose-700">
                {" "}
                {language.mainpage.content.p3.span2}
              </span>
              {language.mainpage.content.p3.p3} <br />
              {language.mainpage.content.p3.p4}{" "}
              <span className=" text-rose-700">
                {" "}
                {language.mainpage.content.p3.span2}
              </span>
            </p>
          </section>
          <section className="flex items-center justify-end w-2/4">
            <div className="w-[344px] h-[343px] bg-pink-600 rounded-[32px] relative">
              <img className="absolute top-5 left-5" src={profilImg} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Main;
