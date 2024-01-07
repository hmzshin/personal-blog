import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";
import rectangle from "../assets/projects/rectangle.png";

const Projects = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { theme }: any = useContext(ThemeContextObject);
  const { header, body } = language.projects;

  return (
    <section
      id="projects"
      className="bg-grayishYellow dark:bg-[#484148] py-10 md:py-16 customTransition"
    >
      <div className="xl:px-[7%]">
        <h3 className="customTransition sectionHeader 2xl:pb-10">{header}</h3>
        <div className="flex flex-wrap justify-center items-center gap-20 mt-10">
          {body.map((project: any, index: number) => (
            <section
              key={index}
              className={`text-black dark:text-white w-80  flex flex-col items-start self-stretch ${
                theme == "dark" ? project.bgColorDark : project.bgColor
              } rounded-xl gap-5 px-5 py-5 xl:w-[450px] xl:px-10 xl:py-10 xl:gap-10 shadow-2xl relative  hover:scale-[0.98] transition-all duration-200`}
            >
              <h3 className="text-3xl font-bold font-playfair tracking-wider">
                {project.header}
              </h3>
              <p className="text-base font-normal font-sans leading-normal">
                {project.explanation}
              </p>
              <div className="flex flex-wrap gap-2 xl:w-72">
                {project.skills.map((skill: any, index: number) => (
                  <p
                    className="w-fit h-8 py-2 px-2 bg-white dark:bg-[#0c0a0a] rounded-[76px]  text-base text-center font-semibold font-playfair leading-none tracking-wide whitespace-nowrap  customTransition"
                    key={index}
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex w-full justify-between font-sans font-semibold text-sm xl:text-lg">
                <a target="_blank" href={project.gitHubLink}>
                  {project.gitHubText}
                </a>
                <a
                  target="_blank"
                  className="flex gap-1 items-center"
                  href={project.appLink}
                >
                  {project.appText}
                  <img src={project.arrowRight} />{" "}
                </a>
              </div>
              <div className="w-[280px] h-44  xl:w-[500px] xl:h-52 self-center" />
              <img
                src={rectangle}
                className="absolute left-0 -bottom-7 w-80 xl:w-[500px] xl:-bottom-10 z-10 "
              />
              <img
                src={project.img}
                className="absolute object-fill object-center w-[230px] h-[150px] left-[47px] xl:left-[68px]  xl:h-[200px] xl:w-[315px] bottom-[2px] z-0 "
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
