import React, { Component } from 'react';
//import { connect } from 'react-redux';

import './FormMotoCard.css';

class FormMotoCard extends Component {
    render() {
        return (
            <div className='FormMotoCard'>
                <div className='FormMotoCard-img_div'>
                    <img className='FormMotoCard-img' src={this.props.image} alt='moto' />
                </div>
                <div className='FormMotoCard-title'>
                    <h3>{this.props.name}</h3>
                </div>
                <div className='FormMotoCard-short_info'>
                    <p>Type: {this.props.subType !== null ? `${this.props.type} / ${this.props.subType}`:`${this.props.type}`}</p>
                    <p>Engine size: {this.props.engineSize} cm<sup>3</sup></p>
                    <p>Power: {this.props.power} hp</p>
                </div>
            </div>
        );
    }
}

export default FormMotoCard;