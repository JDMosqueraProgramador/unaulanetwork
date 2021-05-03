import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../images/system/loginimg.svg';
import LogoU from '../images/system/logounaula.svg';

import LoginSide from '../components/login/LoginSide';

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid m-0">
                <div className="row vh100" >

                    <LoginSide img={loginImg} text={"Descubre lo que sucede dentro de tu universidad, conéctate con UNAULA NETWORK"} />

                    <div className="col-md-6 g-0 flex-centered col-login">
                        <form className='loginForm formContent'>

                            <img src={LogoU} alt="" />
                            <h1 className='txt-mbl-title'>UNAULA NETWORK</h1>

                            <fieldset>

                                <input
                                    type="text"
                                    name="correo"
                                    placeholder="Correo Universitario"
                                    className="placeInput"
                                />
                                <input
                                    type="password"
                                    name="contraseña"
                                    placeholder="Contraseña"
                                    className="placeInput"
                                />
                                <button type="submit" className="btn-p2 w-100">
                                    Iniciar sesión
                                </button>

                                <Link to="/" className="txt-mbl-body txt-color1 txt-left">Recupera tu contraseña</Link>

                            </fieldset>

                            <div>
                                <p>¿No tienes una cuenta?</p>
                                <Link to="/configuracion" className="btn-p1 w-75">Crear una cuenta</Link>
                            </div>

                            <p className='copy'>&copy; DAKAJ 2021</p>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
