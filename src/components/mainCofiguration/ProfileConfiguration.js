import React, { Component } from 'react';
import plusWhiteIcon from '../../images/icons/plus-white.svg';

import Validacion from '../../modules/inputErrors';

import Competence from '../profile/Competence';
import SeguirCard from "../profile/SeguirCard";

export default class ProfileConfiguration extends Component {

    state = {
        persons: [
            {
                id: 12,
                headerInfo: {
                    img: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg",
                    title: "Nayibe Cano Fernandez",
                    informacion: ["Profesora, ingenierías"]
                }
            },
            {
                id: 32,
                headerInfo: {
                    img: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg",
                    title: "Nayibe Cano Fernandez",
                    informacion: ["Profesora, ingenierías"]
                }
            },
            {
                id: 31,
                headerInfo: {
                    img: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg",
                    title: "Nayibe Cano Fernandez",
                    informacion: ["Profesora, ingenierías"]
                }
            }
        ],

        inputWorkStyle: {
            display: "none"
        },

        // Tabs

        tabPosition: 0,
        previousStyle: {
            display: "none"
        },
        omitirStyle: {
            display: "none"
        },

        buttonDisabled: true,

        // Form 

        // Primera parte

        dateOfBirth: {
            value: '',
            error: "inicial",
        },
        tienesTrabajo: {
            value: false
        },
        work: {
            value: "",
            error: "inicial"
        },
        description: {
            value: '',
            error: "inicial"
        },

        // Segunda parte

        profilePicture: {
            value: '',
            error: 'inicial'
        },

        phone: {
            value: '',
            error: 'inicial'
        },

        // tercera parte

        competences: [],

        competencesSelected: [
            { id: 1, title: "Desarrollo web" },
            { id: 2, title: "React" },
            { id: 3, title: "Angular" },
            { id: 4, title: "React native" },
            { id: 5, title: "SCSS" },
            { id: 6, title: "HTML" },
            { id: 7, title: "CSS" },
            { id: 8, title: "TypeScript" },
            { id: 9, title: "Trabajo en equipo" }
        ]

    }

    componentDidMount() {

        const tabs = document.querySelector(".tabs").querySelectorAll(".circleTabs");
        const tabsContent = document.querySelectorAll(".tabContent");

        tabs.forEach((tab, i) => {
            tab.addEventListener("click", () => {

                tabsContent[this.state.tabPosition].classList.remove("active");
                tabsContent[i].classList.add("active");

                this.setState({ tabPosition: i });

            })
        });

    }

    handleChange(vacio, cantidad, e) {

        // debugger
        // console.log(e, vacio, cantidad);

        // let input = this.state[e.target.name];
        // input.value = e.target.value;
        // input.error = null;

        // if (vacio === true) {
        //     input.error = (input.value === "") ? "Debes llenar este campo" : input.error;
        // }

        // if (cantidad[0] === true && input.error === null) {
        //     input.error = (input.value.length <= cantidad[1]) ? `Debe contener al menos ${cantidad[1]} carácteres` : input.error;
        // }

        this.setState({
            [e.target.name]: Validacion(e.target.value, vacio, cantidad, false)
        })

        this.validateButton();

    }

    getProfilePicture = async (e) => {

        let imgTemporalURL = window.URL.createObjectURL(e.target.files[0]);

        if (imgTemporalURL !== undefined && imgTemporalURL !== null) {

            document.querySelector(".addProfilePicture").children[0].children[0].src = imgTemporalURL;
            document.querySelector(".addProfilePicture").children[0].children[0].classList.add("added");

            await this.setState({
                profilePicture: {
                    error: null,
                    value: imgTemporalURL
                }
            })

            this.validateButton();
        }

    }

    validateButton = () => {

        // debugger

        // const posicion = (position !== null && position !== undefined) ? position : this.state.tabPosition;

        switch (this.state.tabPosition) {
            case 0:
                this.setState({
                    buttonDisabled: (this.state.dateOfBirth.error !== null || this.state.description.error !== null)
                })

                break;

            case 1:
                this.setState({
                    buttonDisabled: (this.state.profilePicture.error !== null && this.state.phone.error !== null)
                })
                break;

            case 2:
                this.setState({
                    buttonDisabled: !(this.state.competences.length > 0)
                })
                break;

            default:
                break;
        }

        console.log(this.state.tabPosition, this.state.buttonDisabled);

    }

    // Botones

    next = () => {

        const tabsContent = document.querySelectorAll(".tabContent");
        const circleTabs = document.querySelectorAll('.circleTabs');
        const barsTabs = document.querySelectorAll('.barsTabs');

        if (this.state.tabPosition !== 3) {

            tabsContent[this.state.tabPosition].classList.remove("active");
            tabsContent[this.state.tabPosition + 1].classList.add("active");

            circleTabs[this.state.tabPosition + 1].classList.add("tabActive");
            barsTabs[this.state.tabPosition].classList.add("tabActive");

            this.setState({ tabPosition: this.state.tabPosition + 1, buttonDisabled: true });

        }

        console.log(this.state.tabPosition);

    }

    previous = async () => {

        const tabsContent = document.querySelectorAll(".tabContent");

        if (this.state.tabPosition !== 0) {

            const newPosition = this.state.tabPosition - 1
            tabsContent[this.state.tabPosition].classList.remove("active");
            tabsContent[newPosition].classList.add("active");

            await this.setState({ tabPosition: newPosition });

            this.validateButton();

        }

        console.log(this.state.tabPosition);

    }

    hasWork = (e) => {

        let setDisplay = (e.target.checked) ? "block" : "none";

        this.setState({
            inputWorkStyle: {
                display: setDisplay
            }
        })

    }

    // métodos de competences 

    setCompetencia = async (id) => {

        let newArray = this.state.competences;
        newArray.push(id);

        await this.setState({
            competences: newArray
        })

        this.validateButton();

    }

    deleteCompetencia = async (id) => {
        await this.setState({
            competences: this.state.competences.filter(competencia => competencia !== id)
        })

        this.validateButton();
    }

    handleSubmit = async (e) => {
        
        e.preventDefault();

    }

    render() {
        return (
            <div>
                {/* Nav de tabs en bolitas */}

                <div className='tabs'>
                    <div className='circleTabs flex-centered txt-mbl-subtitle tabActive'>1</div>
                    <div className='barsTabs'></div>

                    <div className='circleTabs flex-centered txt-mbl-subtitle'>2</div>
                    <div className='barsTabs'></div>

                    <div className='flex-centered circleTabs txt-mbl-subtitle'>3</div>
                    <div className='barsTabs'></div>

                    <div className='circleTabs flex-centered txt-mbl-subtitle'>4</div>
                </div>

                <h2 className='txt-mbl-title mx-auto my-16 text-center'>
                    Configura tu perfil
                </h2>

                {/* Cada una de las partes del formulario de configurción son los fieldset  */}

                <form className='' onClick={this.handleSubmit.bind(this)}>

                    <fieldset className='tabContent active'>
                        <input className='placeInput' type='date' name='dateOfBirth' placeholder='Fecha de nacimiento' onChange={this.handleChange.bind(this, true, [false])} />
                        <div className='flex-centered'>
                            <input type='checkbox' id='trabajoCheck' className='check' name='tienesTrabajo' onChange={this.hasWork} />
                            <label htmlFor='trabajoCheck' className='txt-mbl-subtitle mx-2'>¿Tienes trabajo?</label>
                        </div>

                        <input className='placeInput' type='text' placeholder='Escribe aquí tu trabajo' name='work' style={this.state.inputWorkStyle} onChange={this.handleChange.bind(this, true, [true, 8])} />

                        <textarea className='placeInput' placeholder='Agrega una descripción sobre tí' name='description' rows='5' onChange={this.handleChange.bind(this, true, [true, 12])}></textarea>

                        {/* <div>
                            <button className='btn-p2 w-100'>Siguiente</button>
                        </div> */}

                    </fieldset>

                    <fieldset className='tabContent'>
                        <div className='flex-centered'>

                            <label htmlFor='profilePicture' className='addProfilePicture flex-centered pointer'>
                                Agrega una foto de perfil
                                <span className='flex-centered'>
                                    <img src={plusWhiteIcon} alt='' />
                                </span>
                            </label>
                            <input type='file' id='profilePicture' className='d-none' name='profilePicture' accept="image/*" onChange={this.getProfilePicture} />
                        </div>

                        <input className='placeInput' type='number' name='phone' placeholder='Número de teléfono' onChange={this.handleChange.bind(this, true, [true, 9])} />

                    </fieldset>

                    <fieldset className='tabContent'>
                        <h3 className='txt-mbl-subtitle text-center'>Agrega tus competencias</h3>

                        <input className='placeInput' type='text' placeholder='Buscar una competencia' />

                        <div className='d-flex flex-wrap justify-content-center'>

                            {
                                this.state.competencesSelected.map(competence => (
                                    <Competence deleteCompetencia={this.deleteCompetencia} setCompetencia={this.setCompetencia} key={competence.id} competencia={competence} />
                                ))
                            }

                        </div>

                        <h3 className='txt-mbl-subtitle text-center my-16'>¿No encuentras la competencia? </h3>
                        <input className='placeInput' type='text' placeholder='Agrega una nueva competencia' />

                    </fieldset>

                    <fieldset className='tabContent'>
                        <h3 className='txt-mbl-subtitle text-center'>Personas que podrías seguir</h3>
                        <input className='placeInput' type='text' placeholder='Buscar una persona' />

                        <div>
                            {
                                this.state.persons.map(person => (
                                    <SeguirCard key={person.id} info={person} />
                                ))
                            }

                        </div>

                    </fieldset>

                    {/* Botones en general para todo */}

                    <div className='d-flex'>
                        <button
                            className='btn-p3 mpr-8'
                            type='button'
                            onClick={this.previous}
                            style={(this.state.tabPosition !== 0) ? {} : this.state.previousStyle}

                        >
                            Volver
                        </button>

                        <button className='btn-p2 widthAvailable 2-100' type='button' onClick={this.next} disabled={this.state.buttonDisabled}>
                            {(this.state.tabPosition === 3) ? "Terminar" : "Siguiente"}
                        </button>
                    </div>

                    <button
                        className='btn-t1 txt-mbl-body mx-auto my-0 py-0'
                        type='button'
                        style={(this.state.tabPosition !== 0 && this.state.tabPosition !== 3) ? {} : this.state.omitirStyle}
                        onClick={this.next}
                    >
                        Omitir por ahora
                    </button>

                </form>
            </div>
        )
    }
}
