import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'

import threePointsIcon from '../../images/icons/threePoints.svg';
import SaveIcon from '../../images/icons/save.svg';
import likeIcon from '../../images/icons/like.svg';
import commentsIcon from '../../images/icons/comments.svg';
import sendIcon from '../../images/icons/send.svg';



export default class Publication extends Component {
    render() {

        const { publication } = this.props; 

        return (
            <div className='publication mt-16'>
                <header className='d-flex'>
                    <HeaderCardsInfo info={publication.headerInfo} />

                    <img src={threePointsIcon} alt='' className='ms-auto' />
                </header>


                <p className='w-100 mt-16'>{publication.description}</p>

                <div className='publicationBody'>
                    <img src={publication.file} alt='' className='w-100' />
                </div>

                <footer>
                    <ul className='d-flex justify-content-between'>
                        <li><img src={likeIcon} alt=''/></li>
                        <li><img src={commentsIcon} alt=''/></li>
                        <li><img src={sendIcon} alt=''/></li>
                        <li><img src={SaveIcon} alt=''/></li>
                    </ul>
                </footer>

            </div>
        )
    }
}
