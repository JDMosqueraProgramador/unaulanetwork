import React, { Component } from 'react';
// import Menu from "../components/general/Menu";
// import Nav from "../components/general/Nav"
import MainPublications from '../components/main/MainPublications';
import MainQuestions from '../components/main/MainQuestions';
import MainGroups from '../components/main/MainGroups';

export default class Main extends Component {
    render() {
        return (
            <div className="container-fluid container-page">
                <div className='row mainPage'>
                    <MainQuestions />
                    <MainPublications />
                    <MainGroups />
                </div>
            </div>
        )
    }
}
