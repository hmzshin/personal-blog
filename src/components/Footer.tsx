import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Footer = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { links, body } = language.footer;
  return (
    <section
      id="footer"
      className="flex flex-col justify-center items-center gap-5 py-10 px-5"
    >
      <p className="  text-left text-gray-950 text-[42px] font-medium font-['Inter'] leading-[63px] tracking-wide">
        {body}
      </p>
      <div>
        {links.map((link: any, index: number) => (
          <a
            key={index}
            href={link.url}
            className={`text-2xl font-medium font-['Inter'] leading-9 ${link.color}`}
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
