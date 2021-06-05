import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages';


import NewMessage from './NewMessage'
export default class MessagesBox extends Component {
    render() {
        return (
            <div className='col-md-8 p-0 sectionScroll'>
                <ChatHeader info = {{
                    img: '',
                    informacion: [],
                    title: "Alexis Suarez Echavarría"
                }}/>

                <Messages />

                <NewMessage />
            </div>
        )
    }
}
