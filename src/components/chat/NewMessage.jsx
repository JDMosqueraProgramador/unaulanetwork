import React, { Component } from 'react'

import paperclipIcon from '../../images/icons/paperclip.svg';
import pictureIcon from '../../images/icons/picture.svg';
import sendIcon from '../../images/icons/send.svg';

export default class NewMessage extends Component {
    render() {
        return (
            <form className='d-flex px-3 newMessage'>
                <img className='mpl-8' src={paperclipIcon} alt=''/>
                <img className='mpl-8' src={pictureIcon} alt=''/>
                <input className='placeInput w-100 mpl-8' placeholder='Escriba aquí su mensaje'/>
                <img className='mpl-8' src={sendIcon} alt=''/>
            </form>
        )
    }
}
