import React, { Component } from 'react'

export default class Competence extends Component {

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

        if( this.props.deleteCompetencia !== null && this.props.setCompetencia !== null){

            if(this.state.selected) {
                this.props.deleteCompetencia(this.props.competencia._id)
            } else {
                this.props.setCompetencia(this.props.competencia._id)
            }
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
            <button type='button' className='competencia' onClick={this.onClick} style={this.state.competenciasStyle}>{competencia.name || competencia.title }</button>
        )
    }
}
