import { useContext } from "react";

import { GlobalProvider, GlobalContext } from "./contexts/GlobalContext";

import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const context = useContext(GlobalContext);

  //TODO: isLoading doesn't seem to be working

  context?.isLoading && console.log("context");

  if (context && context.isLoading) return <p>Carregando...</p>;

  return (
    <GlobalProvider>
      <Header />
      <Content />
    </GlobalProvider>
  );
}

export default App;
