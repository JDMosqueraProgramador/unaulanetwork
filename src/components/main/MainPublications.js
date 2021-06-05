import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Publication from './Publication'
import NewPublication from './NewPublication'

export default class MainPublications extends Component {
    static propTypes = {
        publications: PropTypes.object
    }

    state = {
        publications: [
            {
                id: 1,
                headerInfo: {
                    title: "Alexis Suarez Echavarría",
                    informacion: ["Bienestar Universitario", "20 de abril"],
                    img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/163285308_5244944768912548_3309780487764353130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=dB49_8k7euwAX-UKfsX&_nc_ht=scontent.feoh5-1.fna&oh=729124156e8ff6627ec62a7355cab768&oe=60BEF80E'
                },

                description: "Team 💪🏻",
                file: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/167591299_5291176547622703_7925882057418294449_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=to0h8TgyV8UAX8idGwf&_nc_ht=scontent.feoh5-1.fna&oh=0ea7bbb6e9cc87862e3a9adb8b79f7bc&oe=60BF4251'
            },
            {
                id: 2,
                headerInfo: {
                    title: "Alexander Rendón",
                    informacion: ["Ingeniería", "Hace 8 min"],
                    img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/163285308_5244944768912548_3309780487764353130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=dB49_8k7euwAX-UKfsX&_nc_ht=scontent.feoh5-1.fna&oh=729124156e8ff6627ec62a7355cab768&oe=60BEF80E'
                },

                description: "Esta es la descripción de la publicación",
                file: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/163285308_5244944768912548_3309780487764353130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=dB49_8k7euwAX-UKfsX&_nc_ht=scontent.feoh5-1.fna&oh=729124156e8ff6627ec62a7355cab768&oe=60BEF80E'
            }
        ]
    }

    render() {
        return (
            <div className='col-md-5'>
                <NewPublication />
                {
                    this.state.publications.map(publication => (
                        <Publication key={publication.id} publication={publication} />
                    ))
                }
            </div>
        )
    }
}
