import react from "../assets/skills/react.png";
import js from "../assets/skills/js.png";
import redux from "../assets/skills/redux.png";
import node from "../assets/skills/node.png";
import vscode from "../assets/skills/vscode.png";
import figma from "../assets/skills/figma.png";

const data = [
  { svg: react, text: "REACT" },
  { svg: redux, text: "REDUX" },
  { svg: js, text: "JS" },
  { svg: node, text: "NODE" },
  { svg: vscode, text: "VS CODE" },
  { svg: figma, text: "FIGMA" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col justify-center items-center gap-5 py-10  dark:bg-zinc-700 relative"
    >
      <h3 className="text-gray-950 dark:text-zinc-100 text-4xl font-medium font-['Inter'] tracking-wide">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-5 px-[10%]">
        {data.map((skill: any, index: number) => (
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
    </section>
  );
};

export default Skills;
