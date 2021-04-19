import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoU from '../../img/system/logounaula.svg';
import NotificationIcon from '../../icons/notification.svg';
import searchIcon from '../../icons/search.svg';

export default class Menu extends Component {

    state = {}

    render() {
        return (
            <header className='header'>
                <div className='logo flex-centered'>
                    <Link to='/' className='flex-centered'>
                        <img src={LogoU} alt='Logo de la universidad' />
                        <h1 className='txt-mbl-subtitle'>UNAULA NETWORK</h1>
                    </Link>
                </div>

                <div className='content flex-centered'>

                    {/* buscadores responsive */}

                    <input type='text' className='buscador placeInput d-md-block d-none' placeholder='Escribe aquí lo que deseas buscar' />
                    <img src={NotificationIcon} alt='' className='d-md-block d-none'/>

                    <img src={searchIcon} alt='' className='d-md-none d-block'/>
                    <img src={LogoU} alt='Logo de la universidad' className='me-0' />
                </div>
            </header>
        )
    }
}
