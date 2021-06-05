import React, { Component } from 'react';
import Validacion from '../../modules/inputErrors';

export default class ChangePassword extends Component {

    state = {
        passwordBefore: {
            value: "",
            error: "inicial",
            classError: ""
        },
        passwordNew: {
            value: "",
            error: "inicial",
            classError: ""
        },
        passwordNewConfirm: {
            value: "",
            error: "inicial",
            classError: ""
        },

        buttonDisabled: true
    }

    handleChange = async (vacio, minimo, igual, e) => {

        console.log(e, vacio, minimo)

        await this.setState({
            [e.target.name]: Validacion(e.target.value, vacio, minimo, igual),
        })

        this.setState({
            buttonDisabled: !(this.state.passwordBefore.error === null && this.state.passwordNew.error === null && this.state.passwordNewConfirm.error === null)
        })

    }

    render() {
        return (
            <form className='iniciarConfigForm' onSubmit={this.props.changeForm.bind(this)}>

                <p className='txt-mbl-subtitle my-16 text-center'>
                    Bienvenido a UNAULA NETWORK, la nueva forma de hacer parte de tu universidad, ahora configura tu nueva contraseña para proteger tus datos
                </p>

                <fieldset>

                    <input
                        type="password"
                        name="passwordBefore"
                        placeholder="Contraseña anterior"
                        className={"placeInput " + this.state.passwordBefore.classError}
                        onChange={this.handleChange.bind(this, true, [false], [false])}
                    />

                    <div className='inputError'>
                        {
                            (this.state.passwordBefore.error !== ("inicial" || null)) ? this.state.passwordBefore.error : null
                        }
                    </div>

                    <input
                        type="password"
                        name="passwordNew"
                        placeholder="Contraseña"
                        className={"placeInput " + this.state.passwordNew.classError}
                        onChange={this.handleChange.bind(this, true, [true, 8], [false])}
                    />

                    <div className='inputError'>
                        {
                            (this.state.passwordNew.error !== ("inicial" || null)) ? this.state.passwordNew.error : null
                        }
                    </div>

                    <input
                        type="password"
                        name="passwordNewConfirm"
                        placeholder="Confirmar contraseña"
                        className={"placeInput " + this.state.passwordNewConfirm.classError}
                        onChange={this.handleChange.bind(this, true, [false], [true, this.state.passwordNew.value])}
                    />

                    <div className='inputError' >
                        {
                            (this.state.passwordNewConfirm.error !== ("inicial" || null)) ? this.state.passwordNewConfirm.error : null
                        }
                    </div>

                    <button className="btn-p2 w-100" type='submit' disabled={this.state.buttonDisabled}>
                        Cambiar contraseña
                    </button>

                </fieldset>

            </form>
        )
    }
}
