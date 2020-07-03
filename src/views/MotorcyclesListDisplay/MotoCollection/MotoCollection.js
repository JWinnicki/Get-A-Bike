import React from 'react';
import {connect} from 'react-redux';

import styles from './MotoCollection.module.scss';
import MotoCard from '../MotoCard/MotoCard';

const MotoCollection = ({motoArr}) => {

    const renderBikesList = () => {
        if(motoArr) {
            return motoArr.map(el => {
                return <MotoCard 
                            key={el.model}
                            image={el.image}
                            name={el.model}
                            type={el.type}
                            subType={el.subType}
                            engineSize={el.engineSize}
                            power={el.hp}
                        />
            });
        }
        
    }
    return (
        <div className={styles.MotoCollection}>
            {renderBikesList()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        motoArr: state.motorcycles.selectedBikes
    }
}

export default connect(mapStateToProps)(MotoCollection);