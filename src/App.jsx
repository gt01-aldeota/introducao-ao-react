import Saudacao from "./components/Saudacao";
import Despedida from "./components/Despedida";
import Fetch from "./components/Fetch";
import Carrossel from "./components/Carrossel";
import Header from "./components/Header";
import './App.css'


function App() {

  function funcaoExterna() {
    console.log('funcaoExterna')
    var a = 1
    console.log(a + 2)
  }

  function chameiOKeyUp(e) {
    const inputValue = e.target.value;
    console.log(inputValue);
  }


  return (
    <div>
      <div className="chuchu">
        <div className="lateralEsquerda">
          <div>Logo</div>
          <div>Digital College</div>
          <div className="busca">
            <input
              className="inputBuscar"
              type="text"
              name=""
              id=""
              placeholder="Pesquisar produto..."
              // onKeyUp={chameiOKeyUp}
              onKeyUp={(event) => {
                // event.target.value contém o valor atual do campo de entrada
                const inputValue = event.target.value;
                // Exibe o valor do campo de entrada no console
                console.log(inputValue);
              }}
            />
            <button
              className="textoBuscar"
              onClick={function funcaoExterna() {
                console.log('funcaoExterna')
                var a = 1
                console.log(a + 2)
              }}
              onFocus={function funcaoExterna() {
                console.log('dei o focu')
                var a = 1
                console.log(a + 2)
              }}
            >Buscar</button>
          </div>
        </div>
        <div className="lateralDireita">
          <div><a href="https://google.com">ir pro google</a></div>
          <div><button>Entrar</button></div>
          <div>Carrinho</div>
        </div>
      </div>
      <Header />
      {/* <Carrossel /> */}
      {/* <Saudacao /> */}
      {/* <Despedida /> */}
      {/* <Fetch /> */}
    </div>
  )
}

export default App;