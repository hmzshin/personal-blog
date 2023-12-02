import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Projects = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { header, body } = language.projects;

  return (
    <section id="projects" className="bg-zinc-100 py-10 ">
      <h3 className="text-black text-[29px] font-bold font-['PlayfairDisplay'] tracking-wider text-center">
        {header}
      </h3>
      <div className="flex flex-wrap justify-center gap-20 mt-10">
        {body.map((project: any, index: number) => (
          <section
            key={index}
            className={`w-80  flex flex-col items-center ${project.bgColor} rounded-xl gap-5 px-5 py-5 relative`}
          >
            <h4 className="text-black text-[29px] font-bold font-['PlayfairDisplay'] tracking-wider">
              {project.header}
            </h4>
            <p className=" text-black text-base font-normal font-['Inter'] leading-normal">
              {project.explanation}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill: any, index: number) => (
                <p
                  className="w-[81px] h-8 px-5 pt-1.5 pb-2.5 bg-white rounded-[76px] justify-start items-start gap-2.5 inline-flex text-black text-base font-bold font-['PlayfairDisplay'] leading-none tracking-wide"
                  key={index}
                >
                  {skill}
                </p>
              ))}
            </div>
            <div className="flex w-full justify-between">
              <a href={project.gitHubLink}>View on Github</a>
              <a href={project.appLink}>Go to app </a>
            </div>
            <div className="w-80 h-44" />
            <img src={project.img} className="absolute -bottom-7" />
          </section>
        ))}
      </div>
    </section>
  );
};

export default Projects;
