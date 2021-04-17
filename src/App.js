import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/css/style.css';

// Import components

import Login from './components/Login';
export default class App extends Component {
    render() {
        return (
            <Router>
                <Login/>
            </Router>
        )
    }
}
