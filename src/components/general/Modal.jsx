import React, { Component } from 'react';
import './modal.scss';

export default class Modal extends Component {

    handleClick = (e) => {
    
        if(e.target.className === 'modal-back') this.props.close();
    }

    render() {
        return (
            <div className='modal'>
                <div className='modal-back' onClick={this.handleClick}>
                    <div className='modal-content beautyScroll'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
