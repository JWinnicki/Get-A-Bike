import React from 'react';

import './Footer.css';
import Icon from '../Icon/Icon';

const Footer = () => {
    return (
        <div className='Footer'>
            <p className='Footer-text'>Please note that it's not real company website. This is project of fake rental company.</p>
            <div className='Footer-contact'>
                <p className='Footer-contact--text'>Contact: jwinnicki2@gmail.com</p>
                <a className='Footer-contact--link' href="https://github.com/JWinnicki" rel="noopener noreferrer" target="_blank">
                    <Icon icon='github-sign' size='tiny' color='white' />
                </a>
                <a className='Footer-contact--link' href="https://www.linkedin.com/in/j%C4%99drzej-winnicki-a13921193/" rel="noopener noreferrer" target="_blank">
                    <Icon  icon='linkedin-logo' size='tiny' color='white' />
                </a>
            </div>
        </div>
    );
}

export default Footer;