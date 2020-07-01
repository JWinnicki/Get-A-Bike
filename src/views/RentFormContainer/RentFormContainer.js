import React from 'react';
import {connect} from 'react-redux';

import styles from './RentFormContainer.module.scss';
import FormMotoCard from './RentFormContainerComponents/FormMotoCard/FormMotoCard';
import RentalForm from './RentFormContainerComponents/RentalForm/RentalForm';

const RentFormContainer = ({motoArr, match}) => {
    const selectedModel = motoArr.filter( el => el.model === match.params.name)[0];
    return (
        <div className={styles.RentFormContainer}>
            <div className={styles.RentFormContainerCard}>
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
            <div className={styles.RentFormContainerForm}>
                <div className={styles.RentFormContainerFormContent}>
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