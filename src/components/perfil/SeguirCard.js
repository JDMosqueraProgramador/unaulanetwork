import React, { Component } from 'react';
import HeaderCardsInfo from '../general/HeaderCardsInfo';

export default class SeguirCard extends Component {

    state = {
        siguiendo: false,
        texto: "Seguir",
        btnClass: "btn-p1"
    }
    onClick = () => {

        this.setState({
            siguiendo: !this.state.siguiendo,
            texto: (this.state.siguiendo) ? "Seguir" : "Siguiendo",
            btnClass: (this.state.siguiendo) ? "btn-p1" : "btn-p2"
        })
    }

    render() {
        const {headerInfo} = this.props.info;

        return (

            <div className='seguirCard d-flex'>
                <HeaderCardsInfo info={headerInfo} />

                <button onClick={this.onClick} type='button' className={this.state.btnClass}>{this.state.texto}</button>

            </div>

        )
    }
}
