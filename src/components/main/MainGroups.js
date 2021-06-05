import React, { Component } from 'react'
import GroupCard from '../groups/GroupCard'

export default class MainGroups extends Component {
    state = {
        groups: [
            {
                img: "",
                name: "GRUPO 2020-1",
                typeIntegrants: "Grupo principal / 36 integrantes",
                description: ""
            },
            {
                img: "",
                name: "DAKAJ",
                typeIntegrants: "Grupo de desarrollo / 5 integrantes",
                description: ""
            }
        ]
    }
    render() {
        return (
            <div className='col-md-4 sectionScroll'>
                <h3 className='txt-mbl-subtitle mpb-16'>Tus grupos</h3>
                {
                    this.state.groups.map((group, i) => (
                        <GroupCard key={i} group={group} />
                    ))
                }
            </div>
        )
    }
}
