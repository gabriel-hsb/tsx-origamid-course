import { useState, useEffect } from "react";
import InputWithLabel from "./ui/InputWithLabel";

interface SellsDataAPI {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  parcelas: null | number;
  data: string;
}

const BASE_URL = "https://data.origamid.dev/vendas";

function App() {
  const [fetchedData, setFetchedData] = useState<null | SellsDataAPI[]>(null);
  const [initialDateToFetch, setInitialDateToFetch] = useState("");
  const [finalDayToFetch, setFinalDayToFetch] = useState("");

  const fetchSellsData = async () => {
    try {
      const res = await fetch(`${BASE_URL}`);
      const json = await res.json();
      setFetchedData(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSellsData();
  }, []);

  return (
    <>
      <h1>Hello tsx</h1>
      <InputWithLabel label="Data Inicial" type="date" />
      <InputWithLabel label="Data Final" type="date" />
      <ul>
        {fetchedData !== null &&
          fetchedData.map(({ id, nome, data }) => (
            <li key={id}>
              {nome}: {data}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
