import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Content = () => {
  const context = useContext(GlobalContext);

  if (!context) return null;

  if (context.isLoading) return <p>Carregando...</p>;

  if (context.fetchedData)
    return (
      <section>
        <h2>Abaixo estão suas preferências:</h2>
        <ul>
          <li>Playback: {context.fetchedData.preferencias.playback}</li>
          <li>Qualidade: {context.fetchedData.preferencias.qualidade}</li>
          <li>Volume: {context.fetchedData.preferencias.volume}</li>
        </ul>
      </section>
    );
};

export default Content;
