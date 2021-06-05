import React, { Component } from 'react'
import Message from './Message'
import { monthPipe } from '../../modules/monthPipe';

export default class Messages extends Component {

    state = {
        messages:
            [
                {
                    sender: "recivied",
                    body: "Buenas tardes estimado caballero ilustre, ¿Como se encuentra el día de hoy?",
                    date: new Date("2021-05-04:13:54:43")
                },
                {
                    sender: "sent",
                    body: "Buenas tardes señor",
                    date: new Date("2021-05-04:13:54:43")

                },
                {
                    sender: "sent",
                    body: "Muy bien, y usted?",
                    date: new Date("2021-05-04:13:54:43")
                },
                {
                    sender: "recivied",
                    body: "Ey, la tarea de programación, ¿A qué horas la hacemos?",
                    date: new Date("2021-07-03:13:32:43")
                },
                {
                    sender: "recivied",
                    body: "Porque es para mañana",
                    date: new Date("2021-07-03:13:54:21")
                },
                {
                    sender: "sent",
                    body: "¿A las 3?",
                    date: new Date("2021-07-03:14:03:00")
                },
                {
                    sender: "recivied",
                    body: "Hágale pues, voy a crear el repostorio de una vez",
                    date: new Date("2021-07-03:14:03:40")
                },
                {
                    sender: "recivied",
                    body: "¿Como es su usuario de git?",
                    date: new Date("2021-07-03:14:03:59")
                },
                {
                    sender: "sent",
                    body: "AlexisProgrammer21",
                    date: new Date("2021-07-03:14:03:59")
                },
                {
                    sender: "recivied",
                    body: "¿Como es su usuario de git?",
                    date: new Date("2021-07-03:14:03:59")
                },
                {
                    sender: "sent",
                    body: "AlexisProgrammer21",
                    date: new Date("2021-07-03:14:03:59")
                },
                {
                    sender: "sent",
                    body: "AlexisProgrammer21",
                    date: new Date("2021-07-03:14:03:59")
                },
                {
                    sender: "recivied",
                    body: "¿Como es su usuario de git?",
                    date: new Date("2021-07-03:14:03:59")
                },
                {
                    sender: "sent",
                    body: "AlexisProgrammer21",
                    date: new Date("2021-07-03:14:03:59")
                },
            ]
    }

    componentDidMount = () => {
        document.querySelector('.messagesScroll').scrollTop = document.querySelector('.messagesScroll').clientHeight; 
    }

    render() {

        return (
            <div className='w-100 sectionScroll messagesScroll'>

                {

                    this.state.messages.map((message, i) => {
                        let returnTe;
                        let beforeDate = (i > 0) ? this.state.messages[i - 1].date : new Date('000-00-00:00:00:00');

                        let day = beforeDate.getDay();
                        let year = beforeDate.getFullYear();
                        let month = beforeDate.getMonth();

                        if (day !== message.date.getDay() || month !== message.date.getMonth() || year !== message.date.getFullYear()) {

                            beforeDate = message.date;

                            returnTe = <div className='txt-dkp-body mpt-8 mx-auto text-center my-16'>
                                {beforeDate.getDate()} de {monthPipe(beforeDate.getMonth())}
                            </div>
                        }

                        return (
                            <div key={i}>
                                {returnTe}
                                <Message message={message} />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
