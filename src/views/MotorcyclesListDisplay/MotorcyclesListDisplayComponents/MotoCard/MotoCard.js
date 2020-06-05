import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MotoCard.css';

class MotoCard extends Component {
    render() {
        return (
            <div className='MotoCard'>
                <div className='MotoCard-img_div'>
                    <img className='MotoCard-img' src={this.props.image} alt='moto' />
                </div>
                <div className='MotoCard-title'>
                    <h3>{this.props.name}</h3>
                </div>
                <div className='MotoCard-short_info'>
                    <p>Type: {this.props.subType !== null ? `${this.props.type} / ${this.props.subType}`:`${this.props.type}`}</p>
                    <p>Engine size: {this.props.engineSize} cm<sup>3</sup></p>
                    <p>Power: {this.props.power} hp</p>
                </div>
                <Link className='MotoCard-book' to={`/rent/${this.props.name}`}>RENT NOW</Link>
            </div>
        );
    }
}

export default MotoCard;