import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages';


import NewMessage from './NewMessage'
export default class MessagesBox extends Component {
    render() {
        return (
            <div className='col-md-8 p-0' style={{
                maxHeight: "90vh"
            }}>
                <ChatHeader info = {{
                    img: '',
                    informacion: [],
                    title: "Alexander Rendón Londoño"
                }}/>

                <Messages />

                <NewMessage />
            </div>
        )
    }
}
