import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/css/style.css';

// Import components

import Login from './components/login/Login';
import Main from './components/main/Main';

export default class App extends Component {
    render() {

        if (this.props.login) {

            return (
                <Router>
                    <Login />
                </Router>
            )

        } else {

            return (
                <Router>
                    <Main />
                </Router>
            )
            
        }

    }
}
