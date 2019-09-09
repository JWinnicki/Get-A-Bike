import React from 'react';
import { Link } from 'react-router-dom';

import './Offer.css';
import Icon from '../Icon/Icon';

const Offer = () => {
    return (
        <div className='Offer'>
            <div className='Offer-container'>
                <div className='Offer-offers'>
                    <div className='Offer-section_A'>
                        <div className='section-title'>
                            <Icon icon='wall-clock' size='medium' />
                            <h2>Rent for hours!</h2>
                        </div>
                        <div className='section-content'>
                            <ul className='section-list'>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>1-2 hours costs 12 $ per hour</p></li>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>3-5 hours costs 11 $ per hour</p></li>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>6+ hours costs 10 $ per hour</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='Offer-section_B'>
                        <div className='section-title'>
                            <Icon icon='calendar-with-a-clock-time-tools' size='medium' />
                            <h2>Longer period rental</h2>
                        </div>
                        <div className='section-content'>
                            <ul className='section-list'>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>1-3 day costs 155 $ per day</p></li>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>4-7 days costs 152 $ per day</p></li>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>8-21 days costs 150 $ per day</p></li>
                                <li className='section-list__item'><Icon icon='arrow-right' size='tiny' /><p>22+ days costs 148 $ per day</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link className='Offer-btn' to='/motorcycles'>
                    <div className='Offer-btn__div'>Choose your bike!</div>
                </Link>
            </div>
        </div>
    );
}

export default Offer;