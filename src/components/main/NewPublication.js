import React, { Component } from 'react'
// import unaulaLogo from '../../images/system/logounaula.svg';

import tagIcon from '../../images/icons/tag.svg';
import pictureIcon from '../../images/icons/picture.svg';
import paperclipIcon from '../../images/icons/paperclip.svg';
import arrowLeftIcon from '../../images/icons/arrowLeft.svg';

export default class NewPublication extends Component {

    state = {
        selected: false,
        class: "d-none"
    }

    onHandle = () => {
        // this.setState({
        //     class: (this.state.selected) ? "d-none" : "d-flex",
        //     selected: !this.state.selected
        // })
    }

    render() {
        return (
            <form className='newPublication' onClick={this.onHandle}>
                <div className={this.state.class}>
                    <img src={arrowLeftIcon} alt=''/>
                    <button className='btn-p1 ms-auto'>Publicar</button>
                </div>
                
                <label htmlFor='publication'><img src='https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/163285308_5244944768912548_3309780487764353130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=dB49_8k7euwAX-UKfsX&_nc_ht=scontent.feoh5-1.fna&oh=729124156e8ff6627ec62a7355cab768&oe=60BEF80E' alt='' className='borders-100'/>Escribe tu publicación aquí</label>

                {/* <textarea placeholder='Describe tu publicación' className='placeInput'>
                </textarea> */}
                
                <div className={'buttonsIcons ' + this.state.class}>
                    <img src={pictureIcon} alt='' />
                    <img src={paperclipIcon} alt='' />
                    <img src={tagIcon} alt='' />
                </div>

            </form>
        )
    }
}
