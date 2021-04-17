import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../img/system/loginimg.svg';
import LogoU from '../img/system/logounaula.svg';

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid m-0">
                <div className="row">
                    <div className="col-md-6 g-0 d-md-block d-none overflow-hidden loginImg">
                        <img
                            src={loginImg}
                            alt="Biblioteca de UNAULA"
                            className="w-100 h-100"
                        />
                        <h1 className="absolute-centered">
                            Descubre lo que sucede dentro de tu universidad,
                            conéctate con UNAULA NETWORK
                        </h1>
                    </div>

                    <div className="col-md-6 g-0 flex-centered">
                        <form className='loginForm'>

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
                                    type="text"
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
                                <Link to="/" className="btn-p1 w-75">Crear una cuenta</Link>
                            </div>

                            <p className='copy'>&copy; DAKAJ 2021</p>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
