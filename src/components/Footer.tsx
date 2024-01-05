import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";

const Footer = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { theme }: any = useContext(ThemeContextObject);
  const { links, body } = language.footer;
  return (
    <section
      id="footer"
      className=" bg-grayishYellow dark:bg-[#484148] customTransition pb-36 "
    >
      <div className="flex flex-col justify-around items-center gap-5 px-20 py-10 md:flex-row md:w-[800px] md:m-auto md:gap-10 lg:px-0 xl:gap-20   ">
        <p className=" text-left md:text-center lg:text-right text-darkCyan dark:text-white text-[46px] lg:w-[600px]  font-medium font-sans leading-[63px] tracking-wide relative z-0 customTransition ">
          <span>{body}</span>
          <span
            id="decoration"
            className="w-52 h-[18px] bg-[#82BBFF]  dark:bg-[#3968A0] rounded absolute top-10 left-28 -z-[1] customTransition"
          />
        </p>
        <div className="flex flex-wrap gap-3 md:flex md:flex-col whitespace-nowrap">
          {links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              className={`text-2xl font-medium font-sans leading-9 ${
                theme == "dark" && link.color.includes("gray")
                  ? "text-white"
                  : link.color
              }`}
            >
              {" "}
              {link.page}{" "}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
