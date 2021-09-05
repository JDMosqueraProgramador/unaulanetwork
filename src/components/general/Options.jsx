import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './options.scss'
import ArrowRightIcon from '../../images/icons/arrowRight.svg';

export default class Options extends Component {

    state = {
        open: false
    }

    componentDidMount = async () => {
        await this.setState({
            open: this.props.open
        })
    }

    render() {

        const { title, options } = this.props;
        const display = (this.state.open) ? 'd-block' : 'd-none';
        return (

            <div className={'optionsMenu ' + display}>
                <h2 className='txt-mbl-subtitle'>{title}</h2>
                <ul>
                    {
                        options.map((option, i) => (
                            <li key={i} className='d-flex'>
                                {
                                    (option.action) ?
                                        <button className='icon-button txt-dkp-body' onClick={option.action}>{option.name}</button>
                                        :
                                        <Link className='txt-dkp-body' to={option.url}>{option.name}</Link>
                                }

                                {/* <Link className='txt-dkp-body' to={option.url}>{option.name}</Link> */}
                                <img src={ArrowRightIcon} alt="" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
