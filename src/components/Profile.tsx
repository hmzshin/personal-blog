import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Profile = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { header, basicInfo, aboutMe } = language.profile;

  return (
    <section
      id="profile"
      className="bg-zinc-100 dark:bg-[#2A262B] py-10 relative customTransition"
    >
      <div
        id="decoration"
        className="w-[70px] h-[121px] absolute -top-9 right-0  overflow-x-hidden overflow-y-visible"
      >
        <div className="w-[121px] h-[121px] rounded-full border-[21px] border-pink-600 " />
      </div>
      <div className=" flex flex-col items-center justify-center px-[12%] ] gap-5 xl:gap-0  ">
        <h3 className=" text-black dark:text-white text-4xl font-medium font-sans tracking-[0.36px] customTransition">
          {header}
        </h3>
        <div className="flex flex-col gap-10 lg:flex-row ">
          <div
            id="basicIno"
            className="flex flex-col gap-5 p-10 items-center justify-center text-black font-semibold font-sans bg-white dark:bg-neutral-600 rounded-xl shadow-[5px_5px_0px_0px] shadow-neutral-500 customTransition "
          >
            <h4 className="text-pink-600 text-2xl xl:text-3xl font-medium font-playfair self-start tracking-[0.24px]  ">
              {basicInfo.header}
            </h4>
            <div className="flex dark:text-white text-lg xl:text-xl font-semibold font-sans tracking-[0.18px] customTransition">
              <section className="flex flex-col gap-3">
                {basicInfo.body.map((key: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-baseline justify-between"
                  >
                    {" "}
                    <p className="w-2/4 ">{key[0]}</p>
                    <p className="w-2/4 font-normal">{key[1]}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>

          <div
            id="aboutMe"
            className="flex flex-col items-start gap-5 px-[2%] xl:px-[7%] lg:justify-center xl:gap-10"
          >
            <h4 className="text-black  dark:text-white text-2xl xl:text-3xl font-medium font-playfair tracking-[0.24px] z-0 relative customTransition">
              {aboutMe.header}
              <div
                id="decoration"
                className="absolute top-5 left-0 w-[70px] h-[18px] bg-blue-300 rounded -z-[1] customTransition"
              />
            </h4>
            <div className=" flex flex-col gap-10">
              {Object.values(aboutMe.body).map((item: any, index: number) => (
                <p
                  key={index}
                  className="text-black  dark:text-white text-lg xl:text-xl font-normal font-sans leading-[27px] tracking-[0.18px] customTransition"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
