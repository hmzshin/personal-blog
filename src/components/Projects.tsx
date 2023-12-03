import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";

const Projects = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { theme }: any = useContext(ThemeContextObject);
  const { header, body } = language.projects;

  return (
    <section id="projects" className=" dark:bg-[#484148] py-16 ">
      <div className="xl:w-[1280px] xl:m-auto ">
        <h3 className="text-black dark:text-white text-[29px] font-bold font-['PlayfairDisplay'] tracking-wider text-center">
          {header}
        </h3>
        <div className="flex flex-wrap justify-center gap-20 mt-10">
          {body.map((project: any, index: number) => (
            <section
              key={index}
              className={`text-black dark:text-white w-80  flex flex-col items-center ${
                theme == "dark" ? project.bgColorDark : project.bgColor
              } rounded-xl gap-5 px-5 py-5 relative`}
            >
              <h4 className=" text-[29px] font-bold font-['PlayfairDisplay'] tracking-wider">
                {project.header}
              </h4>
              <p className="  text-base font-normal font-['Inter'] leading-normal">
                {project.explanation}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill: any, index: number) => (
                  <p
                    className="w-[81px] h-8 px-5 pt-1.5 pb-2.5 bg-white dark:bg-[#525252] rounded-[76px] justify-start items-start gap-2.5 inline-flex text-base font-bold font-['PlayfairDisplay'] leading-none tracking-wide"
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
      </div>
    </section>
  );
};

export default Projects;
