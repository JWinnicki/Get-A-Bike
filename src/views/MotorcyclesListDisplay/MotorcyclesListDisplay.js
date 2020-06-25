import React from 'react';
import {connect} from 'react-redux';

import styles from './MotorcyclesListDisplay.module.scss';
import BrandToggler from '../../components/BrandToggler/BrandToggler';
import {selectBrand, selectBikes} from '../../store/actions';
import MotoCollection from './MotorcyclesListDisplayComponents/MotoCollection/MotoCollection';

class MotorcyclesListDisplay extends React.Component {

    componentDidMount() {
        this.props.onSelectBrand(this.props.match.params.brand);

        const motorcyclesList = this.props.motoList.filter(el => {
            return el.brand === this.props.match.params.brand
        });
        
        this.props.onSelectBikes(motorcyclesList);
    }

    onClickHandler = name => {
        this.props.onSelectBrand(name);

        const motorcyclesList = this.props.motoList.filter(el => {
            return el.brand === name
        });
        
        this.props.onSelectBikes(motorcyclesList);
    }

    render() {
        return (
            <div className={styles.MotorcyclesListDisplay}>
                <div className={styles.MotorcyclesListDisplayTogglerContainer}>
                    <BrandToggler
                        clicked = {this.onClickHandler}
                        brands = {this.props.brands}
                        selectedBrand = {this.props.selectedBrand}
                    />
                </div>
                <div className={styles.MotorcyclesListDisplayListContainer}>
                    <MotoCollection />
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => {
    return{
        brands: state.motorcycles.brands,
        selectedBrand: state.motorcycles.selectedBrand,
        motoList: state.motorcycles.motorcycles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectBrand: brandName => dispatch(selectBrand(brandName)),
        onSelectBikes: bikesArr => dispatch(selectBikes(bikesArr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MotorcyclesListDisplay);