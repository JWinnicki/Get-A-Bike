import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BrandLogosList.css';
import BrandLogoItem from '../BrandLogoItem/BrandLogoItem';

class BrandLogosList extends Component {

   renderLogos = () => {
        return this.props.brandsArr.map(el => {
            return <BrandLogoItem
                key={el.name}
                logo={el.logo}
                borderColor={el.color}
                brandName={el.name}
            />
        });
    }

    render() {

        return(
            <div className='Brand-Logos__div'>
                {this.renderLogos()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        brandsArr: state.motorcycles.brands
    };
};
//Pueste
const mapDispatchToProps = dispatch => {
    return {

    };
};



export default connect(mapStateToProps, mapDispatchToProps)(BrandLogosList);
