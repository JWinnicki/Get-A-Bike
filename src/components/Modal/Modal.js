import React from 'react';
import { connect } from 'react-redux';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import { cancelConfirmation } from '../../store/actions/orders';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.show !== this.props.showModal || nextProps.children !== this.props.children){
            return true;
        } else {
            return false;
        }
    }

    render(){
        return(
            <div >
                <Backdrop show={this.props.showModal}/>
                <div 
                    onClick={this.props.onCloseModal}
                    className='Modal-container' 
                    style={{
                        transform: this.props.showModal ? 'translate(0)' : 'translate(0, -100vh)',
                        opacity: this.props.showModal ? '1' : '0'
                    }}
                >
                    <div className='Modal' onClick={e => e.stopPropagation()}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );       
    }
}

const mapPropsToState = state => {
    return {
        showModal: state.orders.renting || state.orders.error || state.orders.deleted || state.orders.checkingOrders || state.orders.rented,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onCloseModal: () => dispatch(cancelConfirmation())
    }
  }

export default connect(mapPropsToState, mapDispatchToProps)(Modal);