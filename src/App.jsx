import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/style.scss';

// Import components

import Menu from './components/navigation/Menu';
import Nav from './components/navigation/Nav';

import Login from './pages/Login';
import MainCofiguration from "./pages/MainCofiguration";
import Main from './pages/Main';
import Perfil from './pages/Profile';
import Chat from './pages/Chat';

import { connect } from 'react-redux';

import { getToken } from './modules/tokens';

import { getUserLoginAPI } from './app/features/users/authSlice';
import NoFound from './pages/NoFound';

class App extends Component {

    componentDidMount = async () => {

        if (getToken() !== null) {
            await this.props.dispatch(getUserLoginAPI)
        }

    }

    render() {

        if (getToken() !== null) {

            return (
                <Router>

                    <Switch>

                        <Route path='/configuracion' >
                            <MainCofiguration />
                        </Route>

                        <Route path='/'>

                            <Menu />
                            <Nav />

                            <Switch>
                                <Route path='/profile/:user'>
                                    <Perfil />
                                </Route>

                                <Route path='/chat'>
                                    <Chat />
                                </Route>

                                <Route exact path='/'>
                                    <Main />
                                </Route>

                                <Route path="*">
                                    <NoFound />
                                </Route>

                            </Switch>

                        </Route>

                    </Switch>

                </Router>
            )

        } else {

            return (

                <Router>
                    <Switch>

                        <Route path='/' >
                            <Login />
                        </Route>

                    </Switch>
                </Router>

            )

        }

    }
}

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({ loginAction, getUserLoginAPI }, dispatch)
//     // return { logIn: (data) => dispatch(logIn(data)) }
// }

// const mapStateToProps = state => ({ login: state.login })


export default connect()(App)
