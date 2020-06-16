import React from 'react';
import { Link } from 'react-router-dom';

import './MotoCard.css';

const MotoCard = ({
    image,
    name,
    subType,
    type,
    power,
    engineSize
}) => (
        <div className='MotoCard'>
            <div className='MotoCard-img_div'>
                <img className='MotoCard-img' src={image} alt='moto' />
            </div>
             <div className='MotoCard-title'>
                <h3>{name}</h3>
            </div>
            <div className='MotoCard-short_info'>
                <p>Type: {subType !== null ? `${type} / ${subType}`:`${type}`}</p>
                <p>Engine size: {engineSize} cm<sup>3</sup></p>
                <p>Power: {power} hp</p>
            </div>
            <Link className='MotoCard-book' to={`/rent/${name}`}>RENT NOW</Link>
        </div>
    );

export default MotoCard;