import React, { Component } from 'react'
import plusWhiteIcon from '../../images/icons/plus-white.svg';

export default class ProfilePictureInput extends Component {

    state = {
        url: plusWhiteIcon,
        added: false
    }

    getProfilePicture = async (e) => {
        let imgTemporalURL = null;
        if(e.target.files[0]) imgTemporalURL = window.URL.createObjectURL(e.target.files[0]);

        if (imgTemporalURL !== undefined && imgTemporalURL !== null) {

            await this.setState({
                // profilePicture: {
                //     error: null,
                //     file: e.target.files[0],
                //     value: imgTemporalURL
                // }
                url: imgTemporalURL,
                added: true
            })

            this.props.getFile(e.target.files[0])

        }

    }

    render() {
        return (
            <div className='flex-centered'>
                <label htmlFor='profilePicture' className='addProfilePicture flex-centered pointer'>
                    Agrega una foto de perfil
                    <span className='flex-centered'>
                        <img src={this.state.url} className={ (this.state.added) ? 'added' : null } alt='' />
                    </span>
                </label>
                <input type='file' id='profilePicture' className='d-none' name='profilePicture' accept="image/*" onChange={this.getProfilePicture} />
            </div>
        )
    }
}
