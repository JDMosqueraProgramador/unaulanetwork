import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo';
import settingsIcon from '../../images/icons/settings.svg';

export default class Notification extends Component {
    

    render() {

        const { notification } = this.props;
        
        return (
            <div className='notification'>
                <HeaderCardsInfo key={notification.id} info={notification.info}/>
                <button className='btn-t2'>
                    <img src={settingsIcon} alt=''/>
                </button>
            </div>
        )
    }
}
