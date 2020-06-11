import React from 'react';

import './CardMenu.css';

const CardMenu = ({options, clicked, selected}) => {

    const renderCards = () => {
        return options.map(el => {
            return(
                <li key={el}>
                    <button onClick={() => clicked(el)} className={`CardMenu-item__button ${selected === el && 'CardMenu-item__button--active'}`} >{el}</button>
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