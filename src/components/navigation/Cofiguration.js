import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'
import { Link } from 'react-router-dom'
import arrowRightIcon from '../../images/icons/arrowRight.svg';
import { destructToken } from '../../modules/tokens';

export default class Cofiguration extends Component {
    render() {

        return (
            
            <ul className='configurationMenu' style={this.props.display}>
                <li className='d-flex'>
                    <Link to='/perfil'>
                        <HeaderCardsInfo info={{
                            title: "Alexis Echavarría Suarez",
                            informacion: ["Ver perfil"],
                            img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/163285308_5244944768912548_3309780487764353130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=dB49_8k7euwAX-UKfsX&_nc_ht=scontent.feoh5-1.fna&oh=729124156e8ff6627ec62a7355cab768&oe=60BEF80E'
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

                <li className='txt-mbl-subtitle pointer' onClick={(e) => { e.preventDefault(); destructToken()}}>
                    Salir
                </li>

            </ul>
        )
    }
}
