import React from 'react';

import './CardMenu.css';

const CardMenu = props => {

    const renderCards = () => {
        return props.options.map(el => {
            return(
                <li key={el}>
                    <button onClick={() => props.clicked(el)} className={`CardMenu-item__button ${props.selected === el ? 'CardMenu-item__button--active' : null}`} >{el}</button>
                </li>
            );
        })
    }

    return(
        <div className='CardMenu-div'>
            <ul className='CardMenu-list'>
                {renderCards()}
            </ul>
        </div>
    );
}

export default CardMenu;