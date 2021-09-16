import React, { Component } from 'react';
// import { withRouter } from "react-router";

import HeaderCardsInfo from '../general/HeaderCardsInfo';
import Competence from './Competence';
import Proyect from './Proyect';
import Logro from './Logro';
import GroupCard from '../groups/GroupCard';

import unaulaLogo from '../../images/system/logounaula.svg';
import threePoints from '../../images/icons/threePoints.svg';
import plusIcon from '../../images/icons/plus.svg';

// import { connect } from 'react-redux';
// import { mapStateToPropsLogin } from '../../app/features/users/authSlice';
import Options from '../general/Options';
import EditProfileModal from './EditProfileModal';
import { getUser } from '../../modules/tokens';
// import { getUserAPI } from '../../api/userApi';
import Empty from '../general/Empty';

export default class ProfileInfo extends Component {

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
        // user: {},
        rol: '',
        profileOptions: false,
        options: [],
        modal: false
    }

    componentDidMount = async () => {
        this.setState(
            {
                // user: (this.props.match.params.user === getUser()) ? this.props.login.user : await getUserAPI({ user: this.props.match.params.user }),
                options: (this.props.user.user === getUser()) ?
                    [
                        {
                            action: this.openModal,
                            name: 'Editar datos del perfil'
                        },
                        {
                            url: '/',
                            name: 'Cambiar contraseña'
                        }
                    ]
                    :
                    [
                        {
                            url: '/',
                            name: 'Ver más información'
                        },
                        {
                            url: '/',
                            name: 'Ayuda'
                        }
                    ],
                rol: (this.props.user.user === getUser()) ? 'Edit' : 'Can view'
            }
        )
    }

    openProfileOptions = async () => {
        this.setState({
            profileOptions: !this.state.profileOptions
        })
    }

    openModal = async () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render = () => {

        const { name, rol, faculty, department, profilePicture, description, work, competences, achievement } = this.props.user;

        const userInfo = {
            img: profilePicture,
            title: name,
            informacion: [rol, `Facultad de ${faculty}`, department, work],
            class: 'profileDesktop'
        }

        let buttons = {
            0: (this.state.rol === "Edit") ? <button className='btn-p2 w-100 mpr-8' onClick={this.openModal}>Editar datos del perfil</button> :
                <button className='btn-p1 w-100 mpr-8 '>Seguir</button>,
            1: (this.state.rol === "Edit") ? /*<button className='btn-p2 w-100 mpr-8'>Ir a UNAULA</button>*/ null :
                <button className='btn-p1 w-100 mpr-8'>Perfil académico</button>
        }

        return (

            <div className="col-md-4 sectionScroll" style={{
                zIndex: (this.state.modal) ? 4 : 'inherit'
            }}>

                {
                    (this.state.modal) ? <EditProfileModal
                        close={this.openModal}
                        inputs={{ work: work, description: description }}
                    /> : null
                }

                <HeaderCardsInfo info={userInfo} />

                <p className='mt-16'><strong>Descripción:</strong> {description} </p>

                <div className='d-flex justify-content-center mt-16 position-relative'>

                    {/* <button className='btn-p1 w-100 mpr-8 '>Seguir</button>
                    <button className='btn-p1 w-100 mpr-8'>Perfil académico</button> */}
                    {
                        buttons[0]
                    }
                    {
                        buttons[1]
                    }
                    <button className='icon-button'> <img src={threePoints} alt='' onClick={this.openProfileOptions} /></button>

                    {
                        (this.state.profileOptions) ? <Options options={this.state.options} title={'Opciones'} open={this.state.profileOptions} /> : null
                    }

                </div>

                <p className='d-flex mt-16'>
                    <strong className='mpr-8'>Seguidores: 3</strong>
                    <strong className='mpr-8 mpl-8'>Seguidos: 3</strong>
                    <strong className='mpr-8 mpl-8'>Publicaciones: 3</strong>
                </p>

                {/* Competencias */}

                <h3 className='mt-32 txt-mbl-subtitle d-flex'>
                    <span className="w-100 d-flex align-items-center">Competencias</span>
                    {
                        (this.state.rol === "Edit") ? <button className="icon-button"><img src={plusIcon} alt="" /></button> : null
                    }
                </h3>

                <div className='d-flex flex-wrap mt-16'>

                    <Empty
                        data={
                            competences?.map(competence => (
                                <Competence deleteCompetencia={null} setCompetencia={null} key={competence._id} competencia={{ id: competence._id, title: competence.name }} />
                            ))
                        }
                        empty={
                            {
                                text: "No se han encontrado competencias",
                                action: () => {},
                                button: "Agregar competencias"
                            }
                        }
                    />

                </div>

                {/* Proyectos */}

                <h3 className='mt-32 txt-mbl-subtitle d-flex'>
                    <span className="w-100 d-flex align-items-center">Proyectos</span>
                    {
                        (this.state.rol === "Edit") ? <button className="icon-button"><img src={plusIcon} alt="" /></button> : null
                    }
                </h3>

                <div className='mt-16'>
                    <Empty
                        data={
                            this.state.proyects?.map((project, i) => (
                                <Proyect proyect={project} key={i}/>
                            ))
                        }
                        empty={
                            {
                                text: "No se han encontrado proyectos",
                                action: () => {},
                                button: "Agregar proyecto"
                            }
                        }
                    />
                    {/* <Proyect proyect={this.state.proyects[0]} /> */}
                </div>

                {/* logros */}

                <h3 className='mt-32 txt-mbl-subtitle d-flex'>
                    <span className="w-100 d-flex align-items-center">Logros</span>
                    {
                        (this.state.rol === "Edit") ? <button className="icon-button"><img src={plusIcon} alt="" /></button> : null
                    }
                </h3>

                <div className='mt-16 d-flex flex-wrap'>

                    <Empty
                        data={
                            achievement?.map((achievement, i) => (
                                <Logro key={i} logro={achievement} />
                            ))
                        }
                        empty={
                            {
                                text: "No se han encontrado logros",
                                action: () => { console.log("Oli x2") },
                                button: "Agregar logros"
                            }
                        }
                    />

                </div>

                {/* logros */}
                
                <h3 className='mt-32 txt-mbl-subtitle'>Grupos</h3>

                <div className='mt-16'>

                    <Empty
                        data={
                            this.state.groups.map((group, i) => (
                                <GroupCard key={i} group={group} />
                            ))
                        }
                        empty={
                            {
                                text: "No se han encontrado grupos",
                                action: () => { console.log("oli") },
                                button: "Agregar logros"
                            }
                        }
                    />
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

// export default connect(mapStateToPropsLogin)(withRouter(ProfileInfo))
