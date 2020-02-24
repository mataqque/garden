import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atributos from "./compenents/atributos/atributos";
import Tipologias from "./compenents/tipologias/tipologias";
function App() {
  return (
    <div className="App">
        <Atributos></Atributos>
        <Tipologias></Tipologias>
    </div>
  );
}

export default App;
