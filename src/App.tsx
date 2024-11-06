import useFetch from "./hooks/useFetch";

type ProductsApi = {};

const BASE_URL = "https://data.origamid.dev/produtos";

function App() {
  const { error, fetchedData, isLoading } = useFetch({
    URL: BASE_URL,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  });

  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <h1>Hello tsx</h1>
      <button disabled={isLoading}>
        {isLoading ? "Carregando..." : "Buscar Dados"}
      </button>
    </>
  );
}

export default App;
