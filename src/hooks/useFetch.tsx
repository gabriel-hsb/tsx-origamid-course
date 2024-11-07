import { useEffect, useState } from "react";

type useFetchProps = {
  URL: RequestInfo | URL;
  OPTIONS?: RequestInit;
};

const useFetch = <T,>({ URL, OPTIONS }: useFetchProps) => {
  const [fetchedData, setFetchedData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchURL = async () => {
      setFetchedData(null);
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(URL, {
          ...OPTIONS,
        });
        if (!res.ok) throw new Error();
        const json = await res.json();
        setFetchedData(json);
      } catch (err) {
        setError(err as string);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchURL();
  }, [URL, OPTIONS]);

  return {
    fetchedData,
    isLoading,
    error,
  };
};

export default useFetch;
