import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './BrandLogoItem.css'
import { selectBrand } from '../../../store/actions/motorcycles';

const BrandLogoItem = ({onSelectBrand, borderColor, brandName, logo}) => {

    const selectBrandHandler = () => {
        onSelectBrand(brandName);
    }
    
    return (
        <Link className={`Logo-div ${borderColor}`} onClick={selectBrandHandler} to={`/motorcycles/${brandName}`}>
            <img src={logo} alt={`${brandName} Logo`} />
        </Link>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectBrand: brandName => dispatch(selectBrand(brandName))
    }
}

export default connect(null, mapDispatchToProps)(BrandLogoItem);