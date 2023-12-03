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
      className="flex flex-col justify-center items-center gap-5 p-10 dark:bg-[#484148]"
    >
      <p className="  text-left text-gray-950 dark:text-white text-[42px] font-medium font-['Inter'] leading-[63px] tracking-wide relative z-0">
        <span>{body}</span>
        <div
          id="decoration"
          className="w-52 h-[18px] bg-[#82BBFF]  dark:bg-[#3968A0] rounded absolute top-10 left-28 -z-[1]"
        />
      </p>
      <div>
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
    </section>
  );
};

export default Footer;
