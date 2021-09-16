import React, { Component } from 'react'
import NoFoundIcon from '../images/icons/404.svg';

export default class NoFound extends Component {
    render() {
        return (
            <div className="container-fluid d-flex container-page justify-content-center align-items-center">
                <div className='noFound'>
                    <img src={NoFoundIcon} alt="" />
                    <p className="txt-dkp-24">La página solicitada no ha sido encontrada, es posible que no exista o haya sido eliminada </p>
                    <div className="d-flex justify-content-center">
                        <button className="btn-p2 mpr-8">Buscar</button>
                        <button className="btn-p1">Volver al inicio</button>
                    </div>
                </div>
            </div>
        )
    }
}
