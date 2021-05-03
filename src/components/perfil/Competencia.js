import React, { Component } from 'react'

export default class Competencia extends Component {

    state = {
        selected: false,
        competenciasStyle: null
    }
    onClick = (e) => {

        let styles = (this.state.competenciasStyle == null) ? {
            background: "orange",
            borderColor: "orange",
            color: "white"
        } : null;

        // debugger

        if(this.state.selected) {
            this.props.deleteCompetencia(this.props.competencia.id)
        } else {
            this.props.setCompetencia(this.props.competencia.id)
        }

        // console.log(e.target.style, styles);

        this.setState({
            competenciasStyle: styles,
            selected: !this.state.selected
        })
    }
    render() {

        let { competencia } = this.props;

        return (
            <button type='button' className='competencia' onClick={this.onClick} style={this.state.competenciasStyle}>{competencia.title}</button>
        )
    }
}