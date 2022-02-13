import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
			<h1>Hello world!</h1>
      <GlobalStyle />
    </div>
  );
}




// Quando eu uso uma importação com export default, quem define o nome do componente é quem o está importando, por isso é bom usar só export que nos obriga a usar o nome do component que foi definido na origem