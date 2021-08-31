import React, { Component } from 'react'

import userIcon from '../../images/icons/user.svg'
import peopleIcon from '../../images/icons/people.svg'
import searchIcon from '../../images/icons/search.svg'

export default class ChatsNav extends Component {
    render() {
        return (
            <nav className='chatNav'>
                <ul className='d-flex'>
                    <li>
                        <img src={userIcon} alt=''/>
                    </li>
                    <li>
                        <img src={peopleIcon} alt=''/>
                    </li>
                    <li>
                        <img src={searchIcon} alt=''/>
                    </li>
                </ul>
            </nav>
        )
    }
}
