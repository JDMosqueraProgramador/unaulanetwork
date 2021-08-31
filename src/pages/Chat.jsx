import React, { Component } from 'react';
import Chats from '../components/chat/Chats';
import MessagesBox from '../components/chat/MessagesBox';
export default class Chat extends Component {
    render() {
        return (
            <div className="container-fluid container-page">
                <div className='row'>
                    <Chats />
                    <MessagesBox />
                </div>
            </div>
        )
    }
}
