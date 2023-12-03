import { DataContextObject } from "../context/DataContext";
import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Skills = () => {
  const { data }: any = useContext(DataContextObject);
  const { language }: any = useContext(LanguageContextObject);
  return (
    <section
      id="skills"
      className=" flex flex-col justify-center items-center gap-5 md:gap-10 py-10 md:py-20  dark:bg-zinc-700 relative"
    >
      <h3 className="text-gray-950 dark:text-zinc-100 text-3xl md:text-4xl font-medium font-['Inter'] tracking-[0.48px]">
        {language.skills}
      </h3>
      <div className="flex flex-wrap justify-center gap-5 md:gap-8 px-[10%]">
        {data.skills.map((skill: any, index: number) => (
          <div
            key={index}
            className="flex-col justify-start items-center gap-2.5 inline-flex"
          >
            <img className="w-20 h-20 rounded-md" src={skill.svg} />
            <div className="text-neutral-500 dark:text-zinc-300 text-lg font-medium font-['Inter'] uppercase leading-9">
              {skill.text}
            </div>
          </div>
        ))}
      </div>
      <div
        id="decoration"
        className="w-32 h-9 rounded-[18px] bg-[#525252] absolute bottom-10 -left-16"
      ></div>
    </section>
  );
};

export default Skills;
