import { DataContextObject } from "../context/DataContext";
import { useContext } from "react";

const Skills = () => {
  const { data }: any = useContext(DataContextObject);
  return (
    <section
      id="skills"
      className=" flex flex-col justify-center items-center gap-5 py-10  dark:bg-zinc-700 relative"
    >
      <h3 className="text-gray-950 dark:text-zinc-100 text-4xl font-medium font-['Inter'] tracking-wide">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-5 px-[10%]">
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
