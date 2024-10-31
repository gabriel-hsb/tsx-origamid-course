import { useState } from "react";

import useApiFetch from "./hooks/useApiFetch";

import FetchedDataList from "./components/FetchedDataList";
import Form from "./components/Form";

function App() {
  const [initialDayToFetch, setInitialDayToFetch] = useState("");
  const [finalDayToFetch, setFinalDayToFetch] = useState("");

  const { refinedSells, fetchSellsData, error, isFetching } = useApiFetch({
    initialDayToFetch,
    finalDayToFetch,
  });

  const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (initialDayToFetch && finalDayToFetch) {
      fetchSellsData();
    }
  };

  return (
    <main>
      <h1>Análise de Vendas</h1>
      <Form
        handleFormSubmit={handleFormSubmit}
        setInitialDayToFetch={setInitialDayToFetch}
        setFinalDayToFetch={setFinalDayToFetch}
        initialDayToFetch={initialDayToFetch}
        finalDayToFetch={finalDayToFetch}
        error={error}
        isFetching={isFetching}
      />
      <FetchedDataList error={error} refinedSells={refinedSells} />
    </main>
  );
}

export default App;
