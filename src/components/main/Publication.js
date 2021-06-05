import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'

import threePointsIcon from '../../images/icons/threePoints.svg';
import SaveIcon from '../../images/icons/save.svg';
import likeIcon from '../../images/icons/like.svg';
import commentsIcon from '../../images/icons/comments.svg';
import sendIcon from '../../images/icons/send.svg';


export default class Publication extends Component {

    state = {
        like: false
    }

    handleLike = (e) => {
        this.setState({
            like: !this.state.like
        })

    }

    render() {

        const { publication } = this.props;

        return (
            <div className='publication mt-16'>
                <header className='d-flex'>
                    <HeaderCardsInfo info={publication.headerInfo} />
                    
                    <button className='ms-auto btn-t2 m-0 p-0'>
                        <img src={threePointsIcon} alt='' />
                    </button>
                </header>

                <p className='w-100 mt-16'>{publication.description}</p>

                <div className='publicationBody d-flex align-items-center'>
                    <img src={publication.file} alt='' className='w-100' />
                </div>

                <footer>
                    <ul className='d-flex justify-content-between'>

                        <li>
                            <button onClick={this.handleLike} className='btn-t2 m-0 p-0'>
                                <img src={likeIcon} alt='' />
                            </button>
                        </li>
                        <li><button className='btn-t2 m-0 p-0'><img src={commentsIcon} alt='' /></button></li>
                        <li><button className='btn-t2 m-0 p-0'><img src={sendIcon} alt='' />    </button></li>
                        <li><button className='btn-t2 m-0 p-0'><img src={SaveIcon} alt='' />    </button></li>
                    </ul>
                </footer>

            </div>
        )
    }
}
