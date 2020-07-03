import React from 'react';
import {Link} from 'react-router-dom';

import styles from './ModalMessage.module.scss';
import Icon from '../../Icon/Icon';

const ModalMessage = ({errorMsg, error, loading, rented, deleted, fetched, checkingOrders, cancelOrder}) => {

    const doesErrorExist = () => error && !loading;
    const isRented = () => rented && !error;
    const isDeleted = () => deleted && !error;
    const isModelNotSelected = () => checkingOrders && !error && !fetched;

    let icon = 'exclamation-mark';
    if(isRented() || isDeleted()) {
        icon = 'checked';
    }

    let text = 'Something went wrong!';
    if(doesErrorExist() && errorMsg) {
        text = errorMsg;
    } else if(isRented()) {
        text = 'Motorcycle successfully rented!';
    } else if(isDeleted()) {
        text = 'Order successfully deleted!';
    } else if(isModelNotSelected()) {
        text = 'Please select model';
    }

    const renderAdditionalInfo = () => {
        return (
            <div className={styles.MessageLinkContainer}>
                <p className={styles.MessageLinkText}>
                    Please click <Link onClick={cancelOrder} className={styles.MessageLink} to='/check_if_available'>here</Link> to check when motorcycle is available.
                </p>
            </div>
        );
    }

    return(
        <>
            <div className={styles.MessageContainer}>
                <Icon size='medium' icon={icon} />
                <p className={styles.MessageText}>
                    {text}
                </p>
            </div>
            {errorMsg === 'Motorcycle not availible' && renderAdditionalInfo()}
        </>
    );
}

export default ModalMessage;