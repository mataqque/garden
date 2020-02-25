import React, { Component } from 'react'
import Header from "../Components/header/header"
import Atributos from "../Components/atributos/atributos"
import Interiores  from "../Components/interiores/interiores"
import Tipologia from "../Components/tipologias/tipologias"
import Biamo from "../Components/biamo/biamo"
import Ubicacion from "../Components/ubicacion/ubicacion"
import Contactanos from 'Components/contactanos/contactanos'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Interiores></Interiores>
                <Atributos></Atributos>
                <Tipologia></Tipologia>
                <Biamo></Biamo>
                <Ubicacion></Ubicacion>
                <Contactanos></Contactanos>
            </div>
        )
    }
}
