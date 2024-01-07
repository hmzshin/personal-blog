import { DataContextObject } from "../context/DataContext";
import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Skills = () => {
  const { data }: any = useContext(DataContextObject);
  const { language }: any = useContext(LanguageContextObject);
  return (
    <section id="skills" className="">
      <div className="flex flex-col justify-center items-center gap-10 md:gap-10 py-10 md:py-16  2xl:gap-20 bg-grayishYellow  dark:bg-zinc-700 relative customTransition">
        <div
          id="decoration"
          className="w-[121px] h-[121px] rounded-full border-[21px] bg-grayishYellow dark:bg-transparent border-darkCyan dark:border-[#525252] absolute -top-16 -left-16 md:left-[70%]  customTransition "
        />

        <h3 className="sectionHeader customTransition">{language.skills}</h3>
        <div className="flex flex-wrap justify-center gap-5 md:gap-8 xl:gap-16 px-[10%]">
          {data.skills.map((skill: any, index: number) => (
            <div
              key={index}
              className="flex-col justify-start items-center gap-2.5 xl:gap-3 inline-flex  "
            >
              <img
                className="w-20 h-20 rounded-md lg:w-[120px] lg:h-[120px] shadow-2xl"
                src={skill.svg}
              />
              <div className="text-darkCyan dark:text-zinc-300 text-lg xl:text-2xl font-medium font-sans uppercase leading-9 customTransition ">
                {skill.text}
              </div>
            </div>
          ))}
        </div>
        <div
          id="decoration"
          className="w-32 h-9 rounded-[18px] bg-darkCyan dark:bg-zinc-800 absolute bottom-10 -left-16 xl:-left-10 customTransition"
        ></div>
      </div>
      <div
        id="decoration"
        className=" w-full h-[2px] bg-darkCyan dark:bg-zinc-700"
      />
    </section>
  );
};

export default Skills;
