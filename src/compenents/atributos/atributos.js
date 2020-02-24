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
                      <img className="img-fluid" src={"/img/house.png"}></img>
                      <div className="barra"></div>
                      <p>Privacidad</p>
                  </div>
            <div className="iconos">
                      <img className="img-fluid" src={"/img/safe.png"}></img>
                      <div className="barra"></div>
                      <p>Seguridad</p>
                  </div>
            <div className="iconos">
                      <img className="img-fluid" src={"/img/diamont.png"}></img>
                      <div className="barra"></div>
                      <p>Finos acabados</p>          
            </div>
            <div className="iconos">
                      <img className="img-fluid" src={"/img/map.png"}></img>
                      <div className="barra"></div>
                      <p>Ubicación ideal</p>
                  </div>
          </div>
      </div>
        )
    }
}
