import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useState } from 'react';
// import SeuNome from './components/SeuNome';
// import Condicional from './components/Condicional';
// import OutraLista from './components/OutraLista';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';
// import Saudacao from './components/Saudacao';
import About from './components/Pages/About';
import './App.css';

function App() {

  // const [nome, setNome] = useState();

  // const meusItens = ['React', 'Vue', 'Angular']; 

  // const name = 'Renan Mendes';

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

      {/* <HelloWorld />
      <SayMyName nome="Renan"/>
      <SayMyName nome={name} />
      <Pessoa nome="Renan" idade="18" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List /> */}

      {/* <Evento numero={1}/>
      <Form /> */}

      {/* <h1>Renderização condicional</h1>
      <Condicional /> */}

      {/* <OutraLista itens={{}}/> */}

      {/* <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} /> */}

      <Router>
        <Link to="/sobre">Sobre</Link>
        <Routes>
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
