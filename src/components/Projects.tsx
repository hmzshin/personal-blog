import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";

const Projects = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { theme }: any = useContext(ThemeContextObject);
  const { header, body } = language.projects;

  return (
    <section
      id="projects"
      className=" dark:bg-[#484148] py-16 customTransition"
    >
      <div className="xl:w-[1280px] xl:m-auto ">
        <h3 className="text-black dark:text-white text-2xl xl:text-4xl font-bold font-playfair tracking-wider text-center customTransition">
          {header}
        </h3>
        <div className="flex flex-wrap justify-center gap-20 mt-10">
          {body.map((project: any, index: number) => (
            <section
              key={index}
              className={`text-black dark:text-white w-80  flex flex-col items-start ${
                theme == "dark" ? project.bgColorDark : project.bgColor
              } rounded-xl gap-5 px-5 py-5 xl:w-[500px] xl:px-10 xl:py-10 xl:gap-10 relative customTransition`}
            >
              <h4 className=" text-[29px] xl:text-4xl font-bold font-playfair tracking-wider">
                {project.header}
              </h4>
              <p className="  text-base font-normal font-sans leading-normal">
                {project.explanation}
              </p>
              <div className="flex flex-wrap gap-2 xl:w-72">
                {project.skills.map((skill: any, index: number) => (
                  <p
                    className="w-20 h-8 py-2 bg-white dark:bg-[#525252] rounded-[76px]  text-base text-center font-semibold font-playfair leading-none tracking-wide  customTransition"
                    key={index}
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex w-full justify-between font-sans font-semibold xl:text-xl">
                <a href={project.gitHubLink}>{project.gitHubText}</a>
                <a className="flex gap-1 items-center" href={project.appLink}>
                  {project.appText}
                  <img src={project.arrowRight} />{" "}
                </a>
              </div>
              <div className="w-80 xl:w-[500px] xl:px-10 h-44" />
              <img
                src={project.img}
                className="absolute -bottom-7 w-[280px] xl:w-[420px] "
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
