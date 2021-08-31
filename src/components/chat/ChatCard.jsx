import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'
export default class ChatCard extends Component {
    render() {

        let { chat } = this.props;

        return (
            <div className='chatCard'>
                <HeaderCardsInfo info={chat.info}/>
                <div className={ 'ms-auto ' + chat.state}></div>
            </div>
        )
    }
}
