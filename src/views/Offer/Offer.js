import React from 'react';

import styles from './Offer.module.scss';
import Icon from '../../components/Icon/Icon';
import BasicButton from '../../components/atoms/BasicButton/BasicButton';

const Offer = () => {
    return (
        <div className={styles.Offer}>
            <div className={styles.OfferContainer}>
                <div className={styles.OfferContent}>
                    <div className={styles.OfferSectionA}>
                        <div className={styles.OfferSectionTitle}>
                            <Icon icon='wall-clock' size='medium'/>
                            <h2 className={styles.OfferSectionTitleText}>Rent for hours!</h2>
                        </div>
                        <div className={styles.OfferSectionContent}>
                            <ul className={styles.OfferSectionList}>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>1-2 hours costs 12 $ per hour</p>
                                </li>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>3-5 hours costs 11 $ per hour</p>
                                </li>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>6+ hours costs 10 $ per hour</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.OfferSectionB}>
                        <div className={styles.OfferSectionTitle}>
                            <Icon icon='calendar-with-a-clock-time-tools' size='medium'/>
                            <h2 className={styles.OfferSectionTitleText}>Longer period rental</h2>
                        </div>
                        <div className={styles.OfferSectionContent}>
                            <ul className={styles.OfferSectionList}>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>1-3 day costs 155 $ per day</p>
                                </li>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>4-7 days costs 152 $ per day</p>
                                </li>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>8-21 days costs 150 $ per day</p>
                                </li>
                                <li className={styles.OfferSectionListItem}>
                                    <Icon icon='arrow-right' size='tiny' />
                                    <p className={styles.OfferSectionListItemText}>22+ days costs 148 $ per day</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.OfferButtonContainer}>
                    <BasicButton tag='link' size='big' to='/motorcycles'>Choose your bike!</BasicButton>
                </div>
            </div>
        </div>
    );
}

export default Offer;