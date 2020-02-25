import React, { Component } from 'react'
import SimpleReactValidator from "simple-react-validator"
import {SperantService} from "../../services/SperantService"
const $ = window.$;

export default class Formulario extends Component {
    constructor(props){
        super(props);
        this.validator = new SimpleReactValidator();
        this._sperantService = new SperantService()
        this.handleCreate = this.handleCreate.bind(this);
        this.state = {
            startValid: false,
            startValidPhone:false,
            startValidEmail:false,
            fnames: '',
            telephone: '',
            email: '',
        }
    }
    submitForm = () =>{
        (this.validator.allValid()) ? this.handleCreate() : this.setState({ startValid: true, startValidPhone:true,startValidEmail:true });
    }
    fnClearInputs = () =>{
        this.setState({
            startValid: false,
            startValidPhone:false,
            startValidEmail:false,
            fnames: '',
            telephone: '',
            email: '',
        })
    }
    setStateFromInput = (event) =>{
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    async handleCreate(event) {
        var thes = this;
        const submit_btn = $('button')
        submit_btn.attr('disabled', 'true').addClass('disabled');
        submit_btn.text('Enviando...')

        let client = {
            fname: this.state.fnames,
            lname: "",
            email: this.state.email,
            main_telephone: this.state.telephone,
            interest_type_id: 5,
            input_channel_ids: 3,
            source_id: 1
        }

        await this._sperantService.auth("zoqujdX24wFIbwd3bDLjEI4LqpfddFvGVdvhKYyg2leiALXvqMDvsDrau8AMhJ31qqeiD8RsvtKOIALYJWRAgTeoVdzvRYLmwtXN")
            .captationWays(window.location.search, {
                "facebook|fbclid|pixel": 2 // facebook
            })
            .client(client)
            .create().then(res => {
                submit_btn.text('Enviado')
                console.log(res.data)
            }, (err) => {
                submit_btn.text('Error!')
                console.log(err.response)
                return false
            })
    }
    render() {
        return (
            <div className="d-md-flex justify-content-center">
                <div className="form-group GtWalsheimProRegular">
                    <input
                        type="text"
                        className={"form-control input-sm "+(this.validator.fieldValid('fnames') ? "is-valid" : ((this.state.startValid == '') ? "": "is-invalid"))}
                        autoComplete={false}
                        name="fnames"
                        placeholder="Nombre y Apellido"
                        value={this.state.fnames} 
                        onChange={this.setStateFromInput}
                    />
                    {this.validator.message('fnames', this.state.fnames, 'required')}
                </div>
                <div className="form-group GtWalsheimProRegular">
                    <input
                        type="email"
                        className={"form-control input-sm "+(this.validator.fieldValid('email') ? "is-valid" : ((this.state.startValid == '') ? "": "is-invalid"))}
                        autoComplete={false}
                        name="email"
                        placeholder="Correo electrónico"
                        value={this.state.email} 
                        onBlur={() => this.setState({startValidEmail:true})} 
                        onChange={this.setStateFromInput}
                    />
                    {this.validator.message('email', this.state.email, 'required|email')}
                </div>
                <div className="form-group GtWalsheimProRegular">
                    <input
                        type="tel"
                        className={"form-control input-sm "+(this.validator.fieldValid('telephone') ? "is-valid" : ((this.state.startValid == '') ? "": "is-invalid"))}
                        autoComplete={false}
                        name="telephone"
                        value={this.state.telephone} 
                        onBlur={() => this.setState({startValidPhone:true})} 
                        onChange={this.setStateFromInput}
                        placeholder="Teléfono / Celular"
                    />
                    {this.validator.message('telephone', this.state.telephone, 'required|numeric|min:7|max:15')}
                </div>
                <div className="form-group text-center">
                    <button 
                        onClick={this.submitForm} 
                        className="btn btn-rounded btn-primary bg-orange">Enviar
                    </button>
                </div>
            </div>
        )
    }
}
