import React, { Component } from 'react'
import Modal from '../general/Modal'

import ProfilePictureInput from '../mainCofiguration/ProfilePictureInput';

export default class EditProfileModal extends Component {


    render() {
        return (
            <Modal close={this.props.close}>
                <form action="#">
                    <h1 className='txt-mbl-title text-center'>Editar perfil</h1>

                    {/* <div className='flex-centered'>
                        <label 
                        htmlFor='profilePicture' 
                        className='addProfilePicture flex-centered pointer txt-mbl-subtitle txt-mbl-subtitle'
                        >
                            Agrega una foto de perfil
                            <span className='flex-centered'>
                                <img src={plusWhiteIcon} alt='' />
                            </span>
                        </label>
                        <input type='file' id='profilePicture' className='d-none' name='profilePicture' accept="image/*" />
                    </div> */}

                    <ProfilePictureInput getFile={() => { }} />

                    <div className="">
                        <label htmlFor="work" className='txt-mbl-subtitle' >Editar trabajo</label>
                        <input type="text" name='work' className='placeInput' placeholder='Escribe aquí tu trabajo' defaultValue={this.props.inputs.work} />
                    </div>

                    <div className="">
                        <label htmlFor="description" className='txt-mbl-subtitle'>Editar descripción</label>
                        <textarea className='placeInput' placeholder='Agrega una descripción sobre tí' name='description' rows='5' defaultValue={this.props.inputs.description}></textarea>
                    </div>

                    <div className='d-flex'>
                        <button type='button' className='btn-p3 mpr-8' onClick={this.props.close}>Cancelar</button>
                        <button type="submit" className='btn-p2 w-100'>Editar datos</button>
                    </div>
                </form>
            </Modal>
        )
    }

}
