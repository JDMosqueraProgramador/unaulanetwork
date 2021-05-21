import React, { Component } from 'react'
import Notification from '../notifications/Notification';

export default class Notifications extends Component {

    state = {
        notifications : [
            {
                id: 1,
                info: {
                    title: 'Notificación 1',
                    informacion: ['Texto'],
                    img: ''
                }
            },

            {
                id: 2,
                info: {
                    title: 'Notificación 1',
                    informacion: ['Texto'],
                    img: ''
                }
            }
        ]
    }
    render() {
        return (
            <div className='notifications' style={{display: 'none'}}>
                <h3 className='txt-mbl-title noti-title'>Notificaciones</h3>
                {
                    this.state.notifications.map((notification, i) => (
                        <Notification key={i} notification={notification} />
                    ))
                }

            </div>
        )
    }
}
