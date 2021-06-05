import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/css/style.css';

// Import components

import Menu from './components/navigation/Menu';
import Nav from './components/navigation/Nav';

import Login from './pages/Login';
import MainCofiguration from "./pages/MainCofiguration";
import Main from './pages/Main';
import Perfil from './pages/Profile';
import Chat from './pages/Chat';

import { getToken } from './modules/tokens';

export default class App extends Component {
    render() {

        if (getToken() !== null) {

            return (
                <Router>

                    <Menu />
                    <Nav />

                    <Switch>

                        <Route path='/perfil'>
                            <Perfil />
                        </Route>

                        <Route path='/chat'>
                            <Chat />
                        </Route>

                        <Route path='/'>
                            <Main />
                        </Route>
                    </Switch>

                </Router>
            )

        } else {

            return (

                <Router>
                    <Switch>

                        <Route path='/configuracion' >
                            <MainCofiguration />
                        </Route>

                        <Route path='/' >
                            <Login />
                        </Route>

                    </Switch>
                </Router>



            )

        }

    }
}
