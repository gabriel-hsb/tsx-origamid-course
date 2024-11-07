import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Header = () => {
  const context = useContext(GlobalContext);

  if (!context) return;

  if (context.error) return <p>Erro</p>;

  if (context.fetchedData)
    return (
      <header>
        <h1>Olá, {context.fetchedData.nome}!</h1>
        <p>Você possui {context.fetchedData.cursos} cursos</p>
      </header>
    );
};

export default Header;
