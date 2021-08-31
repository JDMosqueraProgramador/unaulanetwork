import React, { Component } from 'react'

export default class Message extends Component {
    render() {

        const { message } = this.props;

        return (
            <div className={`message ${message.sender}`} >
                <div className='messageBody'>
                    {message.body}
                </div>
                <div className='messageTime'>
                    {message.date.getHours() + ':' + message.date.getMinutes()}
                </div>
            </div>
        )
    }
}
