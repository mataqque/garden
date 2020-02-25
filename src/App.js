import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header/header"
import Atributos from "./Components/atributos/atributos"
import Interiores  from "./Components/interiores/interiores"
import Tipologia from "./Components/tipologias/tipologias"
import Biamo from "./Components/biamo/biamo"
import Ubicacion from "./Components/ubicacion/ubicacion"
import Contactanos from './Components/contactanos/contactanos'
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Interiores></Interiores>
        <Atributos></Atributos>
        <Tipologia></Tipologia>
        <Biamo></Biamo>
        <Ubicacion></Ubicacion>
        <Contactanos></Contactanos>

    </div>
  );
}

export default App;
