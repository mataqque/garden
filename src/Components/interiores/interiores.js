import React, { Component } from 'react'
import './interiores.scss';
export default class Interiores extends Component {
    render() {
        return (
            <div className="interiores">
                <div className="content-title">
                    <h2 className="title">INTERIORES</h2>
                </div>
                <div className="content-icon">
                    <div className="d-flex flex-row">
                        <div className="rooms-interior mx-2">
                            <img className="img-fluid" src={require("../../Assets/images/bathroom-main.png")}></img>
                        </div>
                        <div className="rooms-interior mx-2">
                            <img className="img-fluid" src={require("../../Assets/images/room-interiors.png")}></img>
                        </div>
                        <div className="rooms-interior mx-2">
                            <img className="img-fluid" src={require("../../Assets/images/bathroom-right-interiors.png")}></img>
                        </div>
                    </div>
                    <div className="buttons-interior">
                        <div className="d-flex flex-row align-items-center justify-content-center mt-3">
                            <div className="buttons"><img className="img-fluid" src={require("../../Assets/images/button-tipologia-left.png")}></img></div>
                            <div className="buttons"><img className="img-fluid" src={require("../../Assets/images/branding-lobby.png")}></img></div>
                            <div className="buttons"><img className="img-fluid" src={require("../../Assets/images/button-tipologia-right.png")}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
