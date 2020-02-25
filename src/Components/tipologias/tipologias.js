import React, { Component } from 'react'
import './tipologias.scss'
export default class Tipologias extends Component {
    render() {
        return (
            <div className="tipologias">
                <div className="plants">
                    <img src={require("../../Assets/images/plant-tipologia-top-left.png")}></img>
                </div>
                <div className="col-lg-12 content-title">
                        <h2 className="title">TIPOLOGIÁS</h2>
                </div>
                <div className="d-flex flex-row content-all">
                    <div className="slider-room">
                        <div class="slider-planta">
                            <div className="content-slider"><img src={require("../../Assets/images/planta.png")}></img></div>
                        </div>
                        <div class="slider d-flex flex-row align-items-center justify-content-center">
                            <div className="d-flex flex-row">
                                <div className="buttons"><img src={require("../../Assets/images/button-tipologia-left.png")}></img></div>
                                <div className="buttons"><img src={require("../../Assets/images/button-tipologia-right.png")}></img></div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="info-room d-flex flex-column">
                        <div className="d-flex flex-row">
                            <div className="room">
                                <div className="barra"></div>
                                <h5 className="c-primary">Modelo</h5>
                                <div><img src={require("../../Assets/images/signal.png")}></img></div>
                                <h4 className="m-0">Departamento</h4>
                                <p className="GtWalsheimLight">002</p>

                            </div>
                            <div className="room">
                                <div className="barra"></div>
                                <h5 className="c-primary">Características</h5>
                                <div><img src={require("../../Assets/images/signal.png")}></img></div>
                                <p>Flat.</p>
                                <p>Nivel Semitono</p>
                                <p>Vista a la calle.</p>
                                <p>Tres dormitorios</p>
                                <p>Tres baños.</p>
                                <p>Dormitorio servicio.</p>
                                <p>Baño visita.</p>
                                <p>Terraza.</p>
                                <p>Lavanderia.</p>
                            </div>
                        </div>
                        <div>
                            <div className="area">
                                    <div className="barra"></div>
                                    <h5 className="c-primary">Área ocupada</h5>
                                    <div><img src={require("../../Assets/images/signal.png")}></img></div>
                                    <p>202,45 m<span>2</span></p>
                                    <h6>UBICACÍON</h6>
                                    <div><img src={require("../../Assets/images/map-house.png")}></img></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
