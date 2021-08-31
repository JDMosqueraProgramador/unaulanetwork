import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo';

import arrowLeftIcon from '../../images/icons/arrowLeft.svg';
export default class ChatHeader extends Component {
    render() {

        const { info } = this.props;

        info.class = "flex-row-reverse ms-auto";
        return (
            <header className='d-flex chatHeader'>
                <img src={arrowLeftIcon} alt=''/>
                <HeaderCardsInfo info={info}/>
            </header>
        )
    }
}
