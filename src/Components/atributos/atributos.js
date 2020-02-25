import React, { Component } from 'react'
import "./atributos.scss"

export default class Atributos extends Component {
    render() {
        return (
            <div className="Atributos">
          <div className="content-title">
              <h2 className="title">Atributos</h2>
          </div>
          <div className="content-icon">
            <div className="iconos">
                      <img className="img-fluid" src={require("../../Assets/images/icon-house.png")}></img>
                      <div className="barra"></div>
                      <p>PRIVACIDAD</p>
                  </div>
            <div className="iconos">
                      <img className="img-fluid" src={require("../../Assets/images/icon-safe.png")}></img>
                      <div className="barra"></div>
                      <p>SEGURIDAD</p>
                  </div>
            <div className="iconos">
                      <img className="img-fluid" src={require("../../Assets/images/icon-diamond.png")}></img>
                      <div className="barra"></div>
                      <p><span className="d-block text-center">FINOS</span>ACABADOS</p>          
            </div>
            <div className="iconos">
                      <img className="img-fluid" src={require("../../Assets/images/icon-place.png")}></img>
                      <div className="barra"></div>
                      <p>UBICACÍON<span className="d-block text-center">IDEAL</span></p>
                  </div>
          </div>
      </div>
        )
    }
}
