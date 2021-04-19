import React, { Component } from 'react';
import Menu from "../general/Menu";
import Nav from "../general/Nav" 

export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Nav/>
            </div>
        )
    }
}
