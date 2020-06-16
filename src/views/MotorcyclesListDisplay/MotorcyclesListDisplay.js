import React from 'react';
import {connect} from 'react-redux';

import './MotorcyclesListDisplay.css';
import BrandToggler from '../../components/BrandToggler/BrandToggler';
import {selectBrand, selectBikes} from '../../store/actions/motorcycles';
import MotoCollection from './MotorcyclesListDisplayComponents/MotoCollection/MotoCollection';

class MotorcyclesListDisplay extends React.Component {

    componentDidMount() {

        this.props.onSelectBrand(this.props.match.params.brand);

        const motorcyclesList = this.props.motoList.filter(el => {
            return el.brand === this.props.match.params.brand
        });
        
        this.props.onSelectBikes(motorcyclesList);
    }

    render() {
        return (
            <div className='MotorcyclesListDisplay'>
                <div className='MotorcyclesListDisplay-togglerDiv'>
                    <BrandToggler />
                </div>
                <div className='list-container'>
                    <MotoCollection />
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => {
    return{
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