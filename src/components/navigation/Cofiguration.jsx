import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'
import { Link } from 'react-router-dom'
import arrowRightIcon from '../../images/icons/arrowRight.svg';
import { destructToken, getUser } from '../../modules/tokens';
// import axios from 'axios';
// import { unaulaApi } from '../../modules/apisConfig';
// import { upperFisrtLetterPipe } from '../../pipes/lettersPipes';
import { connect } from 'react-redux';
import { mapStateToPropsLogin } from '../../app/features/users/authSlice';


class Cofiguration extends Component {

    render() {
        
        const { name, profilePicture } = this.props.login.user;
        const urlToProfile = `/profile/${getUser()}`;

        return (

            <ul className='configurationMenu' style={this.props.display}>
                <li className='d-flex'>
                    <Link to={urlToProfile}>
                        <HeaderCardsInfo info={{
                            title: name,
                            informacion: ['Ver perfil'],
                            img: profilePicture
                        }} />
                    </Link>

                    <img src={arrowRightIcon} alt='' className='ms-auto' />
                </li>

                <li className='txt-mbl-subtitle'>
                    <Link to='/'>
                        Elementos guardados
                    </Link>
                </li>

                <li className='txt-mbl-subtitle'>
                    <Link to='/'>
                        Grupos, equipos y semilleros
                    </Link>
                </li>

                <li className='txt-mbl-subtitle'>
                    <Link to='/'>
                        Ajustes de visivilidad
                    </Link>
                </li>

                <li className='txt-mbl-subtitle'>
                    <Link to='/'>
                        Configuración de privacidad
                    </Link>
                </li>

                <li className='txt-mbl-subtitle pointer' onClick={(e) => { e.preventDefault(); destructToken() }}>
                    Salir
                </li>

            </ul>
        )
    }
}

export default connect(mapStateToPropsLogin)(Cofiguration)
