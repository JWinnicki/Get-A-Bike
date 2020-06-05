import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BrandLogosList.css';
import BrandLogoItem from './MotorcyclesMenuComponents/BrandLogoItem';

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



export default connect(mapStateToProps)(BrandLogosList);