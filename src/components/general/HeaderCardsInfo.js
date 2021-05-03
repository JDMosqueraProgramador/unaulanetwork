import React, { Component } from 'react'

export default class HeaderCardsInfo extends Component {
    render() {

        const { info } = this.props;
        
        return (
            <div className='perfilInfo'>
                <img src={info.img} alt=''/>
                <div className='perfilContent'>
                    <h3 className='txt-mbl-subtitle'>{info.title}</h3>
                    {
                        info.informacion.map((elemento, i) => (
                            <div key={i}>{elemento}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
