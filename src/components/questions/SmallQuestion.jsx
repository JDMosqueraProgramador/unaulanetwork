import React, { Component } from 'react'
import HeaderCardsInfo from '../general/HeaderCardsInfo'
export default class SmallQuestion extends Component {

    render() {

        let { question } = this.props;
        return (

            <div className='smallQuestion'>
                <div className='d-flex'>
                    <HeaderCardsInfo info={question.info} />
                    <div className='ms-auto accountant good'>
                        {question.points}
                    </div>
                </div>

                <p className='mt-16 txt-mbl-body'>{question.question}</p>

                <div className='mt-16 d-flex txt-mbl-body align-items-center'>
                    <div className='accountant regular'>
                        {question.anwers}
                    </div>
                    <p className='mpl-8'>Respuestas de la comunidad</p>

                </div>
            </div>
        )
    }
}
