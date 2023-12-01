import { useContext } from "react";
import { LanguageContextObject } from "../context/LanguageContext";

const Main = () => {
  const { language }: any = useContext(LanguageContextObject);
  return (
    <>
      <div>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
      </div>
      <div></div>
    </>
  );
};

export default Main;
