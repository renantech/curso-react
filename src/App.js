import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Item from './components/Item';

function App() {
  const name = 'Renan Mendes';

  // function sub(x, y) {
  //   return x - y;
  // }

  // const url = "https://via.placeholder.com/150";

  return (
    // Para utilizar estilização através de classes CSS devemos usar e className e não class
    <div className="App">
      {/* <h1>Hello World!</h1>
      <p>Olá! Meu nome é {name}!</p>
      <p>Soma: 2 + 2 = {2 + 2}</p>
      <p>Subtração: 5 - 3 = {sub(5, 3)}</p>
      <img src={url} alt='Minha Imagem' /> */}

      <HelloWorld />
      <SayMyName nome="Renan"/>
      <SayMyName nome={name} />
      <Pessoa nome="Renan" idade="18" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
      <Item marca="Ferrari" />
      <Item marca="Toyota" />

    </div>
  );
}

export default App;
