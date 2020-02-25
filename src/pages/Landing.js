import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import CountDown from "Components/pages/Landing/CountDown"
import Formulario from "Components/pages/Landing/Formulario"
import Swal from 'sweetalert2'

export default class Landing extends Component {
    componentDidMount(){
        document.title = "Garden - Proyecto Inmobiliario"
    }
    render() {
        return (
            <div className="section-proximamente">
                <MediaQuery query="(min-width: 770px)">
                    <div 
                        className={"bgProximamente"} 
                        style={{backgroundImage: `url(${require("Assets/images/bgLanding.png")})`}}
                    />
                </MediaQuery>
                <MediaQuery query="(max-width: 769px)">
                    <div 
                        className={"bgProximamente"} 
                        style={{backgroundImage: `url(${require("Assets/images/bgLandinResponsive.png")})`}} 
                    />
                </MediaQuery>
                <div 
                    className={"svgHeader SVGA"} 
                    style={{WebkitMaskImage: `url(${require("Assets/images/Landing/logo.svg")})`,backgroundColor:'#fff'}} 
                />
                <div 
                    className={"svgHeader SVGB"} 
                    style={{WebkitMaskImage: `url(${require("Assets/images/Landing/biabo.svg")})`, backgroundColor:'#fff'}} 
                />
                <div className="following text-white text-center d-flex align-items-center">
                    Siguenos en: &nbsp;<a href="#" target="_blank" className="content-img" style={{width:30}}><img src={require("Assets/images/Landing/icon-facebook.svg")} className="img img-fluid"
                        /></a>
                </div>
                <div 
                    className={"content-center"}>

                    <div className="content-proximamente">
                        <div className="title_proximamente c-primary AmsdamRegular">PR<span style={{marginLeft:'10px'}}>Ó</span>XIMAMENTE</div>
                        <div className="subtitle_proximamente text-white GtWalsheimRegular">Departamentos de <span className=" c-primary GtWalsheimBold">2 y 3</span> dorms. <br/>en <span className="c-primary GtWalsheimBold">Surco </span>de <span className="c-primary GtWalsheimBold">89.80 m<sup style={{fontSize:'.8rem'}}>2</sup></span> hasta <span className="c-primary GtWalsheimBold">259 m<sup style={{fontSize:'.8rem'}}>2</sup></span></div>
                        <div className="content-time-down">
                            <div className="clock" />
                        </div>
                    </div>

                    <CountDown />

                    <div className="title_formulario c-primary">
                        ¡Reserva ahora!
                    </div>

                    <div className="footer-rever-mobile w-100">
                        <Formulario />
                    </div>

                    <div className="copyright text-white text-center">
                        <span className="GtWalsheimBold">GARDEN</span>&copy; 2020 Created by <a href="https://formulaperu.com" target="_blank" style={{color: "white"}}>Fórmula</a>.
                    </div>

                </div>
            </div>
        )
    }
}
