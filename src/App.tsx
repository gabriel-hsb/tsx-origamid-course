import useFetch from "./hooks/useFetch";

type ApiProduct = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

const BASE_URL = "https://data.origamid.dev/produtos";

function App() {
  const { error, fetchedData, isLoading } = useFetch<ApiProduct>({
    URL: BASE_URL,
  });

  if (error) return <p>Erro</p>;

  if (isLoading) return <p>Carregando...</p>;

  if (fetchedData)
    return (
      <>
        <h1>Hello tsx</h1>
        <ul>
          {fetchedData.map(({ descricao, id }) => (
            <li key={id}>{descricao}</li>
          ))}
        </ul>
      </>
    );
}

export default App;
