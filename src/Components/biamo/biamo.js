import React, { Component } from 'react'
import "./biamo.scss"

export default class Biamo extends Component {
    render() {
        return (
            <div className="biamo d-flex flex-row">
                <div className="branding-biamo flex-column">
                    <div className="img-biamo d-flex align-items-center justify-content-center">
                        <img className="img-fluid" src={require("../../Assets/images/brading-biabo.png")}></img>
                    </div>
                    <p>Somos una empresa inmobiliaria con amplia experiencia en el desarrollo y gestión de proyectos de vivienda a nivel nacional.</p>
                    <p>
                    Ofrecemos a nuestros clientes su nueva vivienda con diseño y acabados innovadores,revalorizando su inversión en el tiempo.
                    </p>
                </div>
                <div className="builds ">
                    <div className="d-flex flex-row">
                        <div className="buttons"><img src={require("../../Assets/images/button-tipologia-left.png")}></img></div>
                        <div className="content-builds d-flex flex-row">
                            <div className="img-build"><img src={require("../../Assets/images/build-left.png")}></img></div>
                            <div className="img-build"><img src={require("../../Assets/images/build-right.png")}></img></div>
                        </div>
                        <div className="buttons"><img src={require("../../Assets/images/button-tipologia-right.png")}></img></div>
                    </div>
                </div>
            </div>
        )
    }
}
