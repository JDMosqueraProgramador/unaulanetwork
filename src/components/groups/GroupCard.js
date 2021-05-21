import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderCardsInfo from '../general/HeaderCardsInfo';

import ArrowRightIcon from '../../images/icons/arrowRight.svg'


export default class GroupCard extends Component {
    static propTypes = {
        group: PropTypes.object
    }

    render() {

        const { group } = this.props

        return (
            <div className='groupCard'>
                <div className='d-flex'>

                    <HeaderCardsInfo info={
                        {
                            img: group.img,
                            informacion: [group.typeIntegrants],
                            title: group.name
                        }
                    } />

                    <img src={ArrowRightIcon} alt='' className='ms-auto' />

                </div>

                {
                    (group.description !== undefined) ? <p>{group.description}</p> : ""
                }

            </div>
        )
    }
}
