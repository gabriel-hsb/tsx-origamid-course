import React, { createContext } from "react";

import useFetch from "../hooks/useFetch";

type TypeGlobalContext<T> = {
  fetchedData: T | null;
  isLoading: boolean;
  error: string | null;
};

type UserApi = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};

const BASE_URL = "https://data.origamid.dev/usuarios/1";

const GlobalContext = createContext<TypeGlobalContext<UserApi> | null>(null);

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const { error, fetchedData, isLoading } = useFetch<UserApi>({
    URL: BASE_URL,
  });

  return (
    <GlobalContext.Provider
      value={{
        error,
        fetchedData,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
