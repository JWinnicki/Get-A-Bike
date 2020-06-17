import React from 'react';
import './FormMotoCard.css';

const FormMotoCard = ({image, name, subType, type, engineSize, power}) => (
    <div className='FormMotoCard'>
        <div className='FormMotoCard-img_div'>
            <img className='FormMotoCard-img' src={image} alt='moto' />
        </div>
        <div className='FormMotoCard-title'>
            <h3>{name}</h3>
        </div>
        <div className='FormMotoCard-short_info'>
            <p>Type: {subType !== null ? `${type} / ${subType}`:`${type}`}</p>
            <p>Engine size: {engineSize} cm<sup>3</sup></p>
            <p>Power: {power} hp</p>
        </div>
    </div>
);

export default FormMotoCard;