import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../modules/tokens';
import LogoU from '../../images/system/logounaula.svg';

import Validacion from '../../modules/inputErrors';

export default class LoginForm extends Component {

    state = {

        email: {
            value: "",
            error: "inicial",
            classError: ""
        },
        password: {
            value: "",
            error: "inicial",
            classError: ""
        },
        responseMessage: undefined,
        buttonDisabled: true

    }

    handleSubmit = (e) => {

        e.preventDefault();

        let body = {
            user: this.state.email.value,
            password: this.state.password.value
        }

        console.log("tre")

        axios.post('http://localhost:4000/auth/login', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {

                console.log(response)

                if (response.status === 200) {
                    setToken(response.headers['auth-token'], body.user);
                    window.location.reload();
                }

            })
            .catch(error => {
                console.log(error.response)

                // eslint-disable-next-line default-case
                switch (error.response.status) {

                    // Password

                    case 400:
                        let { password } = this.state;

                        password.classError = 'invalid';
                        this.setState({
                            password: password,
                            buttonDisabled: true,
                            responseMessage: error.response.data.message
                        })

                        break;

                    // Email

                    case 403:
                        let { email } = this.state;

                        email.classError = 'invalid';
                        this.setState({
                            email: email,
                            buttonDisabled: true,
                            responseMessage: error.response.data.message
                        })

                        break;
                }

            });


    }

    handleChange = async (vacio, minimo, igual, e) => {

        await this.setState({
            [e.target.name]: Validacion(e.target.value, vacio, minimo, igual),
        })

        this.setState({
            buttonDisabled: !(this.state.email.error === null && this.state.password.error === null)
        })

        console.log(this.state[e.target.name])

    }

    render() {
        return (
            <div className="col-md-6 g-0 flex-centered col-login">
                <form className='loginForm formContent' onSubmit={this.handleSubmit.bind(this)}>

                    <img src={LogoU} alt="" />
                    <h1 className='txt-mbl-title'>UNAULA NETWORK</h1>

                    <fieldset>

                        <input
                            type="text"
                            name="email"
                            placeholder="Correo Universitario"
                            className={"placeInput " + this.state.email.classError}
                            onChange={this.handleChange.bind(this, true, [false], [false])}
                        />

                        <div className='inputError txt-left'>
                            {
                                (this.state.email.error !== ("inicial" || null)) ? this.state.email.error : null
                            }
                        </div>

                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className={"placeInput " + this.state.password.classError}
                            onChange={this.handleChange.bind(this, true, [false], [false])}

                        />

                        <div className='inputError txt-left'>
                            {
                                (this.state.password.error !== ("inicial" || null)) ? this.state.password.error : null
                            }
                        </div>

                        <button type="submit" className="btn-p2 w-100" disabled={this.state.buttonDisabled}>
                            Iniciar sesión
                        </button>

                        <div className='inputError txt-left'>
                            {
                                (this.state.responseMessage !== (undefined)) ? this.state.responseMessage : null
                            }
                        </div>

                        <Link to="/" className="txt-mbl-body txt-color1 txt-left">Recupera tu contraseña</Link>

                    </fieldset>

                    <div>
                        <p>¿No tienes una cuenta?</p>
                        <Link to="/configuracion" className="btn-p1 w-75">Crear una cuenta</Link>
                    </div>

                    <p className='copy'>&copy; DAKAJ 2021</p>

                </form>
            </div>
        )
    }
}

