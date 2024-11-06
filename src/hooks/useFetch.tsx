import { useState, useEffect } from "react";

type useFetchProps = {
  URL: RequestInfo | URL;
  options: RequestInit;
};

const useFetch = ({ URL, options }: useFetchProps) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const fetchURL = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(URL, options);
      const json = await res.json();
      console.log(json);
      setFetchedData(json);
    } catch (err) {
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchURL();
  }, [URL]);

  return {
    fetchedData,
    isLoading,
    error,
  };
};

export default useFetch;
