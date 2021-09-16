import React, { Component } from 'react'
import unaulaLogoBlack from '../../images/system/logounaulablack.svg'

export default class Empty extends Component {
    render() {
        
        if(this.props.data === undefined || this.props.data.length < 1) {

            const { empty } = this.props;

            return (
                <div className="d-flex m-auto" style={
                    {maxWidth: '350px'}
                }>
                    <img src={unaulaLogoBlack} alt="" />
                    <div className='mpl-8'>
                        <p className='txt-mbl-subtitle text-center'>{empty.text}</p>
                        <button className='btn-p2 mpt-8 w-100' onClick={empty.action}>{empty.button}</button>
                    </div>
                </div>
            )
        } 
        else {
            return this.props.data;
        }

    }
}
