import { createContext, useReducer } from "react";

export const DataContextObject = createContext({});

const DataContextProvider = ({ children }: any) => {
  function dataReducer(state: any, action: any) {
    switch (action.type) {
      case "SET_DATA":
        return { ...action.payload };

      default:
        return state;
    }
  }
  const [data, dispatchData] = useReducer(dataReducer, {});

  return (
    <DataContextObject.Provider value={{ data, dispatchData }}>
      {children}
    </DataContextObject.Provider>
  );
};

export default DataContextProvider;
