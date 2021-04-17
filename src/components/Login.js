import React, { Component } from 'react';
import loginImg from '../img/system/loginimg.svg';
import LogoU from '../img/system/logounaula.svg';

export default class Login extends Component {
    render() {
        return (
            <div className='container-fluid m-0'>

                <div className='row'>
                    <div className='col-sm-6 g-0 overflow-hidden loginImg'>
                        <img src={loginImg} alt='Biblioteca de UNAULA' className='w-100 h-100'/>
                        <h1 className='absolute-centered'>Descubre lo que sucede dentro de tu universidad, conéctate con UNAULA NETWORK</h1>
                    </div>

                    <div className='col-sm-6 g-0'>
                        <form>
                            <img src={LogoU} alt=''/>
                            <h1>UNAULA NETWORK</h1>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
