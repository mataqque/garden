import React, { Component } from 'react'
import "./contactanos.scss"
export default class Contactanos extends Component {
    render() {
        return (
            <div className="contactanos d-flex flex-row">
                <div className="formulario">
                    <div>
                        <h2 className="title">Contactanos</h2>
                        <p>¿En cuántos dormitorios está interesado?</p>
                        <div>
                            <input name="" className="btn" type="text" placeholder="Nombre y apellido"></input>
                            <input name="" className="btn" type="text" placeholder="Correo electrónico"></input>
                            <input name="" className="btn" type="text" placeholder="Teléfono / Celular"></input>
                        </div>
                        <div>
                            <button className="btn-submit">Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="content-img d-flex justify-content-center align-items-center">
                    <img className="family" src={require("../../Assets/images/family.png")}></img>
                </div>
            </div>
        )
    }
}
