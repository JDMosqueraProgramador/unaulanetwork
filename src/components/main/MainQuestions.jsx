import React, { Component } from 'react'
import SmallQuestion from '../questions/SmallQuestion'

export default class MainQuestions extends Component {

    state = {
        
        questions: [

            {
                id: 1,
                question: "Por qué separado se escribe junto y todo junto se escribe separado",
                points: 5,
                anwers: 3,
                info: {
                    title: 'Alexander Rendón Londoño',
                    informacion: ['Cálculo integral'],
                    img: 'https://scontent.feoh5-1.fna.fbcdn.net/v/t1.6435-9/131987698_2815575492025644_2170592644744824906_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8lQrQ5XmwNYAX_x-x9U&_nc_ht=scontent.feoh5-1.fna&oh=6888081fe2c2d96b4a6b2812abac17e5&oe=60BEAFE7'
                }
            }

        ]
    }

    render() {
        return (
            <div className='col-md-3 d-md-block d-none sectionScroll'>
                <h3 className='txt-mbl-subtitle'>Preguntas más recientes</h3>

                {
                    this.state.questions.map(question => (
                        <SmallQuestion key={question.id} question={question} />
                    ))
                }
            </div>
        )
    }
}
