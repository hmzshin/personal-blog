import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Profile = () => {
  const { language }: any = useContext(LanguageContextObject);
  const { header, basicInfo, aboutMe } = language.profile;

  console.log("bu neden olmuyor prifile", basicInfo.body);
  return (
    <section id="language.profile" className="bg-zinc-100 py-10">
      <div className=" flex flex-col  items-center justify-center px-[10%] gap-5">
        <h3 className=" text-black text-4xl font-medium font-['Inter'] tracking-tight">
          {header}
        </h3>
        <div className="flex flex-col gap-5 items-center justify-center text-black text-lg font-semibold font-['Inter'] tracking-tight">
          <h4 className="text-pink-600 text-2xl font-normal font-['Playfair Display'] tracking-tight">
            {basicInfo.header}
          </h4>
          <div className="flex">
            <section className="flex flex-col gap-3">
              {basicInfo.body.map((key: any, index: number) => (
                <div
                  key={index}
                  className="flex items-baseline justify-between"
                >
                  {" "}
                  <p className="w-2/4">{key[0]}</p>
                  <p className="w-2/4">{key[1]}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
        <div className="">
          <div className=" bg-neutral-600 bg-opacity-50 rounded-xl" />
          <div className=" bg-white rounded-xl" />
          <div className=" text-black text-lg font-semibold font-['Inter'] tracking-tight"></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
