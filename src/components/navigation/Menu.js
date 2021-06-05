import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { destructToken, getUser, getConfig } from '../../modules/tokens';

import Notifications from './Notifications';
import Configuration from './Cofiguration';

import LogoU from '../../images/system/logounaula.svg';
import NotificationIcon from '../../images/icons/notification.svg';
import searchIcon from '../../images/icons/search.svg';

export default class Menu extends Component {

    state = {
        menuConfig: { display: 'none' },
        notifications: { display: 'none' }
    }
    

    handleSearch = () => {

        axios.get(`http://localhost:4000/auth/profile?userName=${getUser()}`, getConfig())
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.response)
                destructToken();
            })

    }

    handleMenuConfig = async () => {
        this.setState({
            menuConfig: (this.state.menuConfig.display === 'none') ? { display: 'block' } : { display: 'none' }
        })
    }

    handleNotifications = () => {

        this.setState({
            notifications: (this.state.notifications.display === 'none') ? { display: 'block' } : { display: 'none' }
        })

    }

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

                    <input type='text' className='buscador placeInput d-md-block d-none' placeholder='Escribe aquí lo que deseas buscar' onChange={this.handleSearch} />
                    <img src={NotificationIcon} alt='' className='d-md-block d-none' onClick={this.handleNotifications.bind(this)} />

                    <Notifications display={this.state.notifications} />

                    <img src={searchIcon} alt='' className='d-md-none d-block' />
                    <img src='https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/163285308_5244944768912548_3309780487764353130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=dB49_8k7euwAX-UKfsX&_nc_ht=scontent.feoh5-1.fna&oh=729124156e8ff6627ec62a7355cab768&oe=60BEF80E' alt='' className='me-0 borders-100' onClick={this.handleMenuConfig}/>                    
                </div>

                <Configuration display={this.state.menuConfig} />

            </header>
        )
    }
}
