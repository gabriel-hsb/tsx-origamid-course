import React, { createContext, useState } from "react";

type TypeGlobalContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const GlobalContext = createContext<TypeGlobalContext | null>(null);

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
