import logo from './logo.svg';
import './App.css';

function App() {
  const nome = "Wallace Nascimento";
  const classTitulo = "titulo-vermelho";
  const titulo = "OK OK OK OK OK OK OK OK OK OK"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Oi eu sou o {nome}</p>
        <a
          className={classTitulo}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {titulo}
        </a>
      </header>
    </div>
  );
}

export default App;
