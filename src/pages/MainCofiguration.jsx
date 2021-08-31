import React, { Component } from 'react';
import loginImg from '../images/system/loginimg.svg';
import LogoU from '../images/system/logounaula.svg';

import LoginSide from '../components/login/LoginSide';

import ChangePassword from '../components/mainCofiguration/ChangePassword';
import ProfileConfiguration from '../components/mainCofiguration/ProfileConfiguration';

export default class MainCofiguration extends Component {

    state = {
        nuevaContraseña: true  
    }

    changeForm = (e) => {

        e.preventDefault();
        this.setState({
            nuevaContraseña: false
        })
    } 

    render() {
        return (

            <div className="container-fluid m-0">
                <div className="row vh100" >

                    <LoginSide img={loginImg} text={"Haz parte de la comunidad que trae miles de beneficios para tí"} />

                    <div className="col-md-6 g-0 flex-centered col-login iniciarConfigForm flex-column">

                        <div className='formContent'>
                            <div className='logo mx-auto my-16'>
                                <img src={LogoU} alt="" className='' />
                                <h1 className='txt-dkp-24'>UNAULA NETWORK</h1>
                            </div>

                            {(this.state.nuevaContraseña) ? <ChangePassword changeForm={this.changeForm} /> : <ProfileConfiguration />}
                            
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
