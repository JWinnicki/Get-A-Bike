import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './BrandLogoItem.module.scss'
import {selectBrand} from '../../../store/actions/motorcycles';

const BrandLogoItem = ({onSelectBrand, brandName, logo}) => {

    const selectBrandHandler = () => {
        onSelectBrand(brandName);
    }

    const style = [styles.BrandLogoItemImg, brandName === 'Honda' ? styles.small : styles.standard].join(' ');
    
    return (
        <Link className={styles.BrandLogoItem} onClick={selectBrandHandler} to={`/motorcycles/${brandName}`}>
            <img className={style} src={logo} alt={`${brandName} Logo`}/>
        </Link>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectBrand: brandName => dispatch(selectBrand(brandName))
    }
}

export default connect(null, mapDispatchToProps)(BrandLogoItem);