import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './BrandLogoItem.css'
import { selectBrand } from '../../../store/actions/motorcycles';

class BrandLogoItem extends Component {

    selectBrandHandler = () => {
        this.props.onSelectBrand(this.props.brandName);
    }

    render() {

        let className = `Logo-div ${this.props.borderColor}`

        return (
            <Link className={className} onClick={this.selectBrandHandler} to={`/motorcycles/${this.props.brandName}`}>
                <img src={this.props.logo} alt={`${this.props.brandName} Logo`} />
            </Link>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectBrand: brandName => dispatch(selectBrand(brandName))
    }
}

export default connect(null, mapDispatchToProps)(BrandLogoItem);