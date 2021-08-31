import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'

export default class Followed extends Component {

    state = {
        followed: [
            {
                id: 1,
                title: "Juan David Mosquera Muñoz",
                informacion: ["Ingeniería"],
                img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/181382024_1864381073731383_3363484472543177969_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XiG6Z1y_SH0AX_BllXl&_nc_ht=scontent.feoh5-1.fna&oh=94d122aea50a9ec62d9597dadf0f718d&oe=60BDDBE7'
            },
            {
                id: 2,
                title: "Alexander Rendón Londoño",
                informacion: ["Ingeniería"],
                img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/131987698_2815575492025644_2170592644744824906_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8lQrQ5XmwNYAX_x-x9U&_nc_ht=scontent.feoh5-1.fna&oh=6888081fe2c2d96b4a6b2812abac17e5&oe=60BEAFE7'
            },
            {
                id: 3,
                title: "Kevin Leonardy Bermudez Usma",
                informacion: ["Ingeniería"],
                img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/181382024_1864381073731383_3363484472543177969_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XiG6Z1y_SH0AX_BllXl&_nc_ht=scontent.feoh5-1.fna&oh=94d122aea50a9ec62d9597dadf0f718d&oe=60BDDBE7'
            }
        ]
    }

    render() {

        return (
            <div className="col-3 d-md-block d-none sectionScroll">
                <h3 className='txt-mbl-subtitle'>Seguidos</h3>

                <div className='mt-16 followed'>
                    {
                        this.state.followed.map(person => (
                            <HeaderCardsInfo key={person.id} info={person} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
