import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Proyect extends Component {
    render() {

        const { proyect } = this.props;

        return (

            <div className='proyect'>
                <div className='d-flex mpb-8 align-items-center'>
                    <h3 className='float-left txt-mbl-title proyectTitle'>{proyect.name}</h3>
                    <span className='float-right txt-mbl-min proyectDevelopment ms-auto'>{proyect.development}</span>
                </div>

                <div className='txt-mbl-body mpb-8'>
                    <strong>Áreas del proyecto: </strong>
                    {

                        proyect.areas.map((area, i) => (
                            <span key={i} className='etiqueta'>{area}</span>
                        ))

                    }

                    {/* //// <span className='etiqueta'>Etiqueta</span>
                    ////<span className='etiqueta'>Etiqueta</span>
                    ////<span className='etiqueta'>Etiqueta</span> */}
                </div>

                <p className='mpb-8 txt-mbl-body'>{proyect.description}</p>

                <div className='d-flex justify-content-center '>
                    <button className='btn-p1 w-100 mpr-8 my-0'>Empezar a seguir</button>
                    <button className='btn-p1 w-100 my-0'>Perfil académico</button>
                </div>
            </div>
        )
    }
}

Proyect.protoTypes = {
    proyect: PropTypes.object.isRequired
}

//? Estructura que debe llevar

/*

? proyect = {
    name,
    development,
    areas: [area, area],
    description,

} 



*/

