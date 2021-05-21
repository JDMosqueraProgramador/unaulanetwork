import React, { Component } from 'react'

export default class HeaderCardsInfo extends Component {
    render() {

        const { info } = this.props;

        let stylesClasses = (info.class !== undefined) ? 'perfilInfo ' + info.class : "perfilInfo";
        let txtClass = (info.class !== undefined) ? 'txt-mbl-body' + info.class : "txt-mbl-min";

        return (

            <div className={stylesClasses}>
                <div className='profileImg'>
                    <img src={info.img}  className='img-fluid' alt='' />
                </div>
                <div className='perfilContent'>
                    <h3 className='txt-mbl-subtitle'>{info.title}</h3>
                    {
                        info.informacion.map((elemento, i) => (
                            <div className={txtClass} key={i}>{elemento}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
