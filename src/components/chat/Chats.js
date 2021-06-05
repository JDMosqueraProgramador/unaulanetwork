import React, { Component } from 'react'
import ChatCard from './ChatCard'
import ChatsNav from './ChatsNav'

export default class Chats extends Component {

    state = {
        chats: [
            {
                id: 1,
                state: 'connected',
                info: {
                    title: "Alexander Rendón Londoño",
                    informacion: ['Tú: Alex qué hay que hacer en estadística?'],
                    img: ''
                }
            },
            {
                id: 2,
                state: 'disconnected',
                info: {
                    title: "Kevin Leonardy Bermudez Usma",
                    informacion: ['Tú: Alex qué hay que hacer en estadística?'],
                    img: ''
                }
            }
        ]
    }

    render() {

        return (
            <div className='col-md-4 sectionScroll br-1'>
                <h3 className='txt-mbl-subtitle'>Chats</h3>
                {
                    this.state.chats.map(chat => (
                        <ChatCard key={chat.id} chat={chat} />
                    ))
                }

                <ChatsNav />
            </div>
        )
    }
}
