import React from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {

    //dzieki temu OrderSummary re-renderuje się tylko po pokazaniu się Modal'a
    //Dokładniej chodzi o to, że nie ma potrzeby re-renderować modal kiedy jest on niewidoczny. Jeśli nie re-rendujemy Modal to OrderSummary jako child też się nie rerenderuje
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.show !== this.props.show || nextProps.children !== this.props.children){
            return true;
        } else {
            return false;
        }
    }
    render(){
        return(
            <div >
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    onClick={this.props.modalClosed}
                    className='Modal-container' 
                    style={{
                        transform: this.props.show ? 'translate(0)' : 'translate(0, -100vh)',
                        opacity: this.props.show ? '1' : '0'
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
export default Modal;