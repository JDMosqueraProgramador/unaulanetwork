import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeIcon from '../../images/icons/home.svg';
import chatIcon from '../../images/icons/chat.svg';
import groupIcon from '../../images/icons/group.svg';
import questionIcon from '../../images/icons/question.svg';
import workIcon from '../../images/icons/work.svg';
import notificationIcon from '../../images/icons/notification.svg';

export default class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeIcon} alt=''/>
                        </Link>
                    </li>

                    <li>
                        <Link to="/chat">
                            <img src={chatIcon} alt=''/>
                        </Link>
                    </li>

                    <li className='d-md-none d-block'>
                        <Link to="/">
                            <img src={notificationIcon} alt=''/>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <img src={workIcon} alt=''/>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <img src={questionIcon} alt=''/>
                        </Link>
                    </li>

                    <li className='d-md-block d-none'>
                        <Link to="/">
                            <img src={groupIcon} alt=''/>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
