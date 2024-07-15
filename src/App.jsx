import Saudacao from "./components/Saudacao";
import Despedida from "./components/Despedida";
import Fetch from "./components/Fetch";
import Carrossel from "./components/Carrossel";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Carrossel />
      <Saudacao />
      <Despedida />
      <Fetch />
    </div>
  )
}

export default App;