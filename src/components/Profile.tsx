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
      <div className=" flex flex-col  items-center justify-center px-[10%] ] gap-5 xl:w-[1280px] xl:px-[120px] xl:m-auto">
        <h3 className=" text-black dark:text-white text-4xl font-medium font-['Inter'] tracking-[0.36px] customTransition">
          {header}
        </h3>
        <div className="flex flex-col  gap-7 lg:flex-row">
          <div
            id="basicIno"
            className="flex flex-col gap-5 p-5 items-center justify-center text-black text-lg font-semibold font-['Inter']  bg-white dark:bg-neutral-600 rounded-xl shadow-[5px_5px_0px_0px] shadow-neutral-500 customTransition"
          >
            <h4 className="text-pink-600 text-2xl font-normal font-['PlayfairDisplay'] tracking-[0.24px] ">
              {basicInfo.header}
            </h4>
            <div className="flex dark:text-white text-lg font-semibold font-['Inter'] tracking-[0.18px] customTransition">
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
            className="flex flex-col items-center gap-5 relative px-[2%]"
          >
            <div
              id="decoration"
              className="absolute top-5 right-1/2 w-[70px] h-[18px] bg-blue-300 rounded z-0 customTransition"
            />
            <h4 className="text-black  dark:text-white text-2xl font-normal font-['PlayfairDisplay'] tracking-[0.24px] z-10 customTransition">
              {aboutMe.header}
            </h4>
            <div className=" flex flex-col gap-10">
              {Object.values(aboutMe.body).map((item: any, index: number) => (
                <p
                  key={index}
                  className="text-black  dark:text-white text-lg font-normal font-['Inter'] leading-[27px] tracking-[0.18px] customTransition"
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
