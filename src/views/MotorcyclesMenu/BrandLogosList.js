import React from 'react';
import {connect} from 'react-redux';

import styles from './BrandLogosList.module.scss';
import BrandLogoItem from './BrandLogoItem/BrandLogoItem';

const BrandLogosList = ({brandsArr}) => {

   const renderLogos = () => {
        return brandsArr.map(el => {
            return <BrandLogoItem
                key={el.name}
                logo={el.logo}
                brandName={el.name}
            />
        });
    }

    return(
        <div className={styles.BrandLogosList}>
            {renderLogos()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        brandsArr: state.motorcycles.brands
    };
};



export default connect(mapStateToProps)(BrandLogosList);