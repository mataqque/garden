import React, { Component } from 'react'
import './header.scss'
export default class componentName extends Component {
    render() {
        return (
            <div className="header">
               <div className="background">
                </div>
                <div className="content-header">
                    <div className="navbar-home">
                        <nav className="content-navbar">
                        <ul className="items-navbar d-flex flex-row">
                                <a className="brand" href="#"><img class="img-fluid" src={require("../../Assets/images/branding.png")}></img></a>
                                <li>Inicio</li>
                                <li>Interiores</li>
                                <li>Atributos</li>
                                <li>Tipologias</li>
                                <li>Ubicación</li>
                                <li>Respaldo</li>
                                <li>Contacto</li>
                                <li>Siguenos en:<i></i></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="d-flex flex-row header-content">
                        <div className="header-text"></div>
                        <div className="header-imagen"></div>
                    </div>
                </div>
            </div>
            
        )
    }
}
