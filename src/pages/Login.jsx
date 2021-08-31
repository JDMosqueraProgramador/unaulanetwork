import React, { Component } from 'react';
import loginImg from '../images/system/loginimg.svg';

import LoginForm from '../components/login/LoginForm';
import LoginSide from '../components/login/LoginSide';

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid m-0">
                <div className="row vh100" >

                    <LoginSide img={loginImg} text={"Descubre lo que sucede dentro de tu universidad, conéctate con UNAULA NETWORK"} />

                    <LoginForm />
                </div>
            </div>

        );
    }
}
