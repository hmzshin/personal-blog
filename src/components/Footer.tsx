import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";
import { ThemeContextObject } from "../context/ThemeContext";

const Footer = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { theme }: any = useContext(ThemeContextObject);
  const { links, body } = language.footer;
  return (
    <section id="footer" className=" dark:bg-[#484148]">
      <div className="flex flex-col md:flex-row md:w-[800px] md:m-auto justify-center items-center gap-5 md:gap-10 py-10 px-[10%] md:p-16">
        <p className="  text-left text-gray-950 dark:text-white text-[42px] font-medium font-['Inter'] leading-[63px] tracking-wide relative z-0">
          <span>{body}</span>
          <div
            id="decoration"
            className="w-52 h-[18px] bg-[#82BBFF]  dark:bg-[#3968A0] rounded absolute top-10 left-28 -z-[1]"
          />
        </p>
        <div className="md:flex md:flex-col md:w-[250px]">
          {links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              className={`text-2xl font-medium font-['Inter'] leading-9 ${
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
