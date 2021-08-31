import React, { Component } from 'react'

import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePublications from '../components/profile/ProfilePublications';
import Followed  from '../components/profile/Followed';

export default class Profile extends Component {

    render() {
        return (

            <div className="container-fluid container-page">
                <div className='row profilePage'>
                    <ProfileInfo />
                    <ProfilePublications />
                    <Followed />
                </div>

            </div>

        )
    }
}
