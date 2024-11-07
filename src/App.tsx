import { GlobalProvider } from "./contexts/GlobalContext";

import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Content />
    </GlobalProvider>
  );
}

export default App;
