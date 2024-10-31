import React from "react";

import Button from "../ui/Button";
import InputWithLabel from "../ui/InputWithLabel";

type FormProps = {
  handleFormSubmit: (e: React.FormEvent) => Promise<void>;
  setInitialDayToFetch: React.Dispatch<React.SetStateAction<string>>;
  setFinalDayToFetch: React.Dispatch<React.SetStateAction<string>>;
  initialDayToFetch: string;
  finalDayToFetch: string;
  error: boolean;
  isFetching: boolean;
};

const Form = ({
  handleFormSubmit,
  setInitialDayToFetch,
  setFinalDayToFetch,
  initialDayToFetch,
  finalDayToFetch,
  error,
  isFetching,
}: FormProps) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <InputWithLabel
        handleInputChange={setInitialDayToFetch}
        value={initialDayToFetch}
        label="Data Inicial"
        type="date"
        required
      />
      <InputWithLabel
        handleInputChange={setFinalDayToFetch}
        value={finalDayToFetch}
        label="Data Final"
        type="date"
        required
      />
      <Button disabled={error || isFetching} type="submit">
        {isFetching ? "Carregando..." : "Buscar Dados"}
      </Button>
    </form>
  );
};

export default Form;
