import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Profile = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { header, basicInfo, aboutMe } = language.profile;

  return (
    <section
      id="profile"
      className="bg-zinc-100 dark:bg-[#2A262B] py-10 relative overflow-x-hidden overflow-y-visible"
    >
      <div
        id="decoration"
        className="w-[121px] h-[121px] rounded-full border-[21px] border-pink-600 absolute -top-9 -right-12"
      />
      <div className=" flex flex-col  items-center justify-center px-[10%] gap-5">
        <h3 className=" text-black dark:text-white text-4xl font-medium font-['Inter'] tracking-tight">
          {header}
        </h3>

        <div className="flex flex-col gap-5 p-5 items-center justify-center text-black text-lg font-semibold font-['Inter'] tracking-tight bg-white dark:bg-neutral-600 rounded-xl shadow-[5px_5px_0px_0px] shadow-neutral-500">
          <h4 className="text-pink-600 text-2xl font-normal font-['PlayfairDisplay'] tracking-tight ">
            {basicInfo.header}
          </h4>
          <div
            id="basicIno"
            className="flex dark:text-white text-lg font-semibold font-['Inter'] tracking-tight"
          >
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
          className="flex flex-col items-center justify-center gap-5 relative"
        >
          <div className="absolute top-5 right-1/2 w-[70px] h-[18px] bg-blue-300 rounded z-0" />
          <h4 className="text-black  dark:text-white text-2xl font-normal font-['PlayfairDisplay'] tracking-wide z-10">
            {aboutMe.header}
          </h4>
          <div className=" flex flex-col gap-10">
            {Object.values(aboutMe.body).map((item: any, index: number) => (
              <p
                key={index}
                className="text-black  dark:text-white text-lg font-normal font-['Inter'] leading-[27px] tracking-tight"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
