import React, { Component } from 'react';

import HeaderCardsInfo from '../general/HeaderCardsInfo';
import Competence from './Competence';
import Proyect from './Proyect';
import Logro from './Logro';
import GroupCard from '../groups/GroupCard';

import unaulaLogo from '../../images/system/logounaula.svg';
import threePoints from '../../images/icons/threePoints.svg';

import { connect } from 'react-redux';
import { mapStateToPropsLogin } from '../../app/features/users/authSlice';

class ProfileInfo extends Component {

    state = {
        proyects: [
            {
                name: "Antioquia Estudia",
                development: "UNABOT",
                areas: ["Educación", "Orientación"],
                description: "Proyecto guía para los estudiantes que empiezan la vida universitaria"
            }
        ],

        logros: [
            {
                date: "15 de febrero de 2021",
                name: "Curso de React",
                description: "React es una tecnología de Facebook"
            },
            {
                date: "15 de febrero de 2021",
                name: "Curso de Node",
                description: "Node es una tecnología de JS"
            }
        ],

        groups: [
            {
                img: "",
                name: "DAKAJ",
                typeIntegrants: "Grupo de desarrollo / 5 integrantes",
                description: ""
            }
        ],
    }

    componentDidMount = async () => {

    
    }

    render() {

        const { name, rol, faculty, department, img, description, work } = this.props.login.user;
        
        const userInfo = {
            img: img,
            title: name,
            informacion: [rol, `Facultad de ${faculty}`, department, work],
            class: 'profileDesktop'
        }
        
        return (

            <div className="col-md-4 sectionScroll">

                <HeaderCardsInfo info={userInfo} />

                <p className='mt-16'><strong>Descripción:</strong> {description} </p>

                <div className='d-flex justify-content-center mt-16'>
                    <button className='btn-p1 w-100 mpr-8 '>Seguir</button>
                    <button className='btn-p1 w-100 mpr-8'>Perfil académico</button>
                    <img src={threePoints} alt='' />
                </div>

                <p className='d-flex mt-16'>
                    <strong className='mpr-8'>Seguidores: 3</strong>
                    <strong className='mpr-8 mpl-8'>Seguidos: 3</strong>
                    <strong className='mpr-8 mpl-8'>Publicaciones: 3</strong>
                </p>

                {/* Competencias  */}

                <h3 className='mt-32 txt-mbl-subtitle'>Competencias</h3>

                <div className='d-flex flex-wrap mt-16'>
                    <Competence deleteCompetencia={null} setCompetencia={null} competencia={{ id: 1, title: "Flutter" }} />
                    <Competence deleteCompetencia={null} setCompetencia={null} competencia={{ id: 2, title: "React Native" }} />
                    <Competence deleteCompetencia={null} setCompetencia={null} competencia={{ id: 3, title: "HTML" }} />
                    <Competence deleteCompetencia={null} setCompetencia={null} competencia={{ id: 4, title: "Trabajo en equipo" }} />
                </div>

                {/* Proyectos */}

                <h3 className='mt-32 txt-mbl-subtitle'>Proyectos</h3>

                <div className='mt-16'>
                    <Proyect proyect={this.state.proyects[0]} />
                </div>

                <h3 className='mt-32 txt-mbl-subtitle'>Logros</h3>

                <div className='mt-16 d-flex flex-wrap'>
                    {
                        this.state.logros.map((logro, i) => (
                            <Logro key={i} logro={logro} />
                        ))
                    }

                </div>

                <h3 className='mt-32 txt-mbl-subtitle'>Grupos</h3>

                <div className='mt-16'>
                    {
                        this.state.groups.map((group, i) => (
                            <GroupCard key={i} group={group} />
                        ))
                    }
                </div>

                <h3 className='mt-32 txt-mbl-subtitle'>Seguidores</h3>

                <div className='mt-16'>
                    <img alt='' src={unaulaLogo} className='follower' width='40px' />
                    <img alt='' src={unaulaLogo} className='follower' width='40px' />
                    <img alt='' src={unaulaLogo} className='follower' width='40px' />
                    <img alt='' src={unaulaLogo} className='follower' width='40px' />
                    <img alt='' src={unaulaLogo} className='follower' width='40px' />
                    <img alt='' src={unaulaLogo} className='follower' width='40px' />
                </div>

            </div>
        )
    }
}

export default connect(mapStateToPropsLogin)(ProfileInfo)
