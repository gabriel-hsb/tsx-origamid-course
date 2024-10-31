import { useEffect, useState } from "react";
import { firstLetterToUpperCase } from "../functions/firstLetterToUppercase";

const BASE_URL = "https://data.origamid.dev/vendas";

type useApiFetchProps = {
  initialDayToFetch: string;
  finalDayToFetch: string;
};

const useApiFetch = ({
  initialDayToFetch,
  finalDayToFetch,
}: useApiFetchProps) => {
  const [fetchedData, setFetchedData] = useState<null | OriginalSellsDataAPI[]>(
    null
  );
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const [refinedSells, setRefinedSells] = useState<
    FormatedSellsDataAPI[] | null
  >(null);

  useEffect(() => {
    if (fetchedData) {
      const formatedSells = fetchedData.map(
        ({ data, id, nome, parcelas, preco, status, pagamento }) => {
          return {
            id: id,
            parcelas: parcelas === null ? 0 : parcelas,
            status: status,
            nome: firstLetterToUpperCase(nome),
            precoNumber: preco,
            precoMoeda: preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
            data: new Date(data),
            pagamento: firstLetterToUpperCase(pagamento),
          };
        }
      );
      setRefinedSells(formatedSells);
    }
  }, [fetchedData]);

  const fetchSellsData = async (): Promise<void> => {
    setIsFetching(true);
    setError(false);

    try {
      const res = await fetch(
        `${BASE_URL}/?inicio=${initialDayToFetch}&final=${finalDayToFetch}`
      );
      const json = await res.json();
      setFetchedData(json);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    refinedSells,
    fetchSellsData,
    isFetching,
    error,
  };
};

export default useApiFetch;
