import React, { Component } from 'react'

export default class InicioSide extends Component {
    render() {
        return (


            <div className="col-md-6 g-0 d-md-block d-none overflow-hidden loginImg">
                <img
                    src={this.props.img}
                    alt="Biblioteca de UNAULA"
                    className="w-100 h-100"
                />
                <h1 className="absolute-centered">
                    {this.props.text}
                </h1>
            </div>

        )
    }
}
