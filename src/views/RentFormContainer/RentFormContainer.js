import React from 'react';
import {connect} from 'react-redux';

import './RentFormContainer.css';
import FormMotoCard from './RentFormContainerComponents/FormMotoCard/FormMotoCard';
import RentalForm from './RentFormContainerComponents/RentalForm/RentalForm';

const RentFormContainer = ({motoArr, match}) => {
    const selectedModel = motoArr.filter( el => el.model === match.params.name)[0];
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

const mapStateToProps = state => {
    return {
        motoArr: state.motorcycles.motorcycles
    }
}
export default connect(mapStateToProps)(RentFormContainer);