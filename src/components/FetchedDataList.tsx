type FetchedDataListProps = {
  refinedSells: FormatedSellsDataAPI[] | null;
  error: boolean;
};

const FetchedDataList = ({ refinedSells, error }: FetchedDataListProps) => {
  if (error)
    return (
      <p>
        Um erro ocorreu 😢 <br />
        Por favor reinicie a página
      </p>
    );

  if (refinedSells?.length === 0)
    return <p>Nenhum resultado foi encontrado ☹️</p>;

  if (refinedSells)
    return (
      <section>
        <p>Foram encontrados {refinedSells.length} resultados 😎👇</p>
        <ul>
          {refinedSells &&
            refinedSells.map(
              ({ data, id, nome, parcelas, precoMoeda, status, pagamento }) => (
                <li key={id}>
                  {nome} - {data.toLocaleDateString("pt-BR")}. <br />
                  {parcelas} parcelas, total de {precoMoeda}. <br />
                  STATUS: {status} - Pagamento: {pagamento}
                  <hr />
                </li>
              )
            )}
        </ul>
      </section>
    );
};

export default FetchedDataList;
