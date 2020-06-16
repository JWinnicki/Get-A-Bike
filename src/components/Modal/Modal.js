import React from 'react';
import { connect } from 'react-redux';

import styles from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import {cancelConfirmation} from '../../store/actions/orders';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps) {
        if(nextProps.show !== this.props.showModal || nextProps.children !== this.props.children){
            return true;
        } else {
            return false;
        }
    }

    render(){

        const {showModal, onCloseModal, children} = this.props;

        return(
            <div >
                <Backdrop show={showModal}/>
                <div 
                    onClick={onCloseModal}
                    className={styles.ModalContainer} 
                    style={{
                        transform: showModal ? 'translate(0)' : 'translate(0, -100vh)',
                        opacity: showModal ? '1' : '0'
                    }}
                >
                    <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        );       
    }
}

const mapPropsToState = state => {
    const shouldShowModal = () => state.orders.renting || state.orders.error || state.orders.deleted || state.orders.checkingOrders || state.orders.rented;

    return {
        showModal: shouldShowModal(),
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onCloseModal: () => dispatch(cancelConfirmation())
    }
  }

export default connect(mapPropsToState, mapDispatchToProps)(Modal);