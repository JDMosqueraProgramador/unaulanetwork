import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Notifications from './Notifications';

import LogoU from '../../images/system/logounaula.svg';
import NotificationIcon from '../../images/icons/notification.svg';
import searchIcon from '../../images/icons/search.svg';


export default class Menu extends Component {

    state = {
        headerStyles: {
            position: "fixed"
        }
    }

    handleNotifications = () => {
        const notifications = document.querySelector('.notifications');

        notifications.style.display = (notifications.style.display === 'none') ? 'block' : 'none';

    }

    render() {
        return (
            <header className='header' style={this.state.headerStyles}>

                <div className='logo flex-centered'>
                    <Link to='/' className='flex-centered'>
                        <img src={LogoU} alt='Logo de la universidad' />
                        <h1 className='txt-mbl-subtitle'>UNAULA NETWORK</h1>
                    </Link>
                </div>

                <div className='content flex-centered'>

                    {/* buscadores responsive */}

                    <input type='text' className='buscador placeInput d-md-block d-none' placeholder='Escribe aquí lo que deseas buscar' />
                    <img src={NotificationIcon} alt='' className='d-md-block d-none' onClick={this.handleNotifications.bind(this)} />

                    <Notifications />

                    <img src={searchIcon} alt='' className='d-md-none d-block' />
                    <img src={LogoU} alt='Logo de la universidad' className='me-0' />
                </div>
            </header>
        )
    }
}
