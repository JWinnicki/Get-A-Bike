import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RentFormContainer.css';
import FormMotoCard from '../FormMotoCard/FormMotoCard';
import RentalForm from '../RentalForm/RentalForm';
import { cancelConfirmation, submitForm, rentBike, fetchOrders } from '../../store/actions/orders';


class RentFormContainer extends Component {

    render() {
        const selectedModel = this.props.motoArr.filter( el => el.model === this.props.match.params.name)[0];
        

        return (
            <div className='form-container'>
                <div className='form-card'>
                    <FormMotoCard 
                        key={selectedModel.model}
                        image={selectedModel.image}
                        name={selectedModel.model}
                        type={selectedModel.type}
                        subType={selectedModel.subType}
                        engineSize={selectedModel.engineSize}
                        power={selectedModel.hp} 
                    />  
                </div>
                <div className='form-content'>
                    <div className='form-content__div'>
                        <RentalForm selectedModel={selectedModel.model} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        motoArr: state.motorcycles.motorcycles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCancelOrder: () => dispatch(cancelConfirmation()),
        onSubmitForm: form => dispatch(submitForm(form)),
        onRentBike: form => dispatch(rentBike(form)),
        onFetchOrders: () => dispatch(fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentFormContainer);