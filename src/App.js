import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/css/style.css';

// Import components

import Login from './pages/Login';
import InicialConfiguracion from "./pages/InicialConfiguracion";
import Main from './pages/Main';

export default class App extends Component {
    render() {

        if (this.props.login) {

            return (
                <Router>
                    <Switch>

                        <Route path='/configuracion' >
                            <InicialConfiguracion />
                        </Route>

                        <Route path='/' >
                            <Login />
                        </Route>

                    </Switch>
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
