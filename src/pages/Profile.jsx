import React, { Component } from 'react'

import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePublications from '../components/profile/ProfilePublications';
import Followed from '../components/profile/Followed';

import { connect } from 'react-redux';
import { mapStateToPropsLogin } from '../app/features/users/authSlice';
import { withRouter } from "react-router";

import { getUser } from '../modules/tokens';
import { getUserAPI } from '../api/userApi';
import NoFound from './NoFound';

class Profile extends Component {

    state = {
        userData: undefined,
        user: undefined
    }

    componentDidMount = async () => {
        this.setState(
            {
                user: this.props.match.params.user,
                userData: (this.props.match.params.user === getUser()) ? this.props.login.user : await getUserAPI({ user: this.props.match.params.user }),
                rol: (this.props.match.params.user === getUser()) ? 'Edit' : 'Can view'
            }
        )
    }

    render() {

        if (this.state.userData === undefined || this.state.userData.status === 404) {

            return (
                <NoFound />
            )

        } else {
            return (
                <div className="container-fluid container-page">
                    <div className='row profilePage'>
                        <ProfileInfo user={{ ...this.state.userData, user: this.state.user }} />
                        <ProfilePublications />
                        <Followed />
                    </div>
                </div>

            )

        }

    }
}

export default connect(mapStateToPropsLogin)(withRouter(Profile))

