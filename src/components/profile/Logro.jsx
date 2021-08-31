import React, { Component } from 'react';
import PropTypes from 'prop-types';

import championIcon from '../../images/icons/Champion.svg';

export default class Logro extends Component {
    render() {

        const { logro } = this.props;
        return (
            <div className='logro'>
                <img src={championIcon} alt=''/>
                <div className='txt-mbl-min'>{logro.date}</div>
                <h4 className='txt-mbl-subtitle'>{logro.name}</h4>
                <p className='txt-mbl-body'>{logro.description}</p>
            </div>
        )
    }
}

Logro.propTypes = {
    logro: PropTypes.object.isRequired
}



