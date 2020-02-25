import React, { Component } from 'react'
import "./ubicacion.scss"
export default class Ubicacion extends Component {
    render() {
        return (
            <div className="ubicacion d-flex flex-row">
                    <div className="map">
                        <img ></img>
                    </div>
                    <div className="text-ubicacion">
                        <div className="content-text">
                            <h2 className="d-block title text-center">UBICACIÓN</h2>
                            <p>
                                Te encontraras a pocos minutos de los principales centros comerciales de la ciudad, donde podras encontrar la ruta gastronómica, supermercados, farmacis,
                                cines, universidades, clinicas y hospitales con fácil acceso a los principales avenidas de la ciudad.
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
}
