import React from 'react';

import styles from './Footer.module.scss';
import Icon from '../Icon/Icon';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <p className={styles.FooterText}>Please note that it's not real company website. This is project of fake rental company.</p>
            <div className={styles.FooterContact}>
                <p className={styles.FooterContactText}>Contact: jwinnicki2@gmail.com</p>
                <a className={styles.FooterContactLink} href="https://github.com/JWinnicki" rel="noopener noreferrer" target="_blank">
                    <Icon icon='github-sign' size='tiny' color='white' />
                </a>
                <a className={styles.FooterContactLink} href="https://www.linkedin.com/in/j%C4%99drzej-winnicki-a13921193/" rel="noopener noreferrer" target="_blank">
                    <Icon  icon='linkedin-logo' size='tiny' color='white' />
                </a>
            </div>
        </div>
    );
}

export default Footer;