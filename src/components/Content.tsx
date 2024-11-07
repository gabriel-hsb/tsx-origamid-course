import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Content = () => {
  const context = useContext(GlobalContext);

  if (!context) return;

  if (context.fetchedData)
    return (
      <div>
        <h2>Abaixo estão suas preferências:</h2>
        <ul>
          <li>Playback: {context.fetchedData.preferencias.playback}</li>
          <li>Qualidade: {context.fetchedData.preferencias.qualidade}</li>
          <li>Volume: {context.fetchedData.preferencias.volume}</li>
        </ul>
      </div>
    );
};

export default Content;
