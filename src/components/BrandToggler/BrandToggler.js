import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './BrandToggler.css';
import { selectBrand, selectBikes } from '../../store/actions/motorcycles';

const BrandToggler = props => {

    const onClickHandler = name => {
        props.onSelectBrand(name);

        const motorcyclesList = props.motoList.filter(el => {
            return el.brand === name
        });
        
        props.onSelectBikes(motorcyclesList);
    }

    const renderOptions = () => {
        

        return props.brands.map(el => {
            let active = '';
            if(props.selectedBrand === el.name) {
                active = 'active'
            }
            return (
                <li onClick={() => onClickHandler(el.name)} key={el.name} className='BrandToggler-list--item'>
                    <Link className={`BrandToggler-list--link BrandToggler-list--link__${active}`} to={`/motorcycles/${el.name}`}>{el.name}</Link>
                </li>
            );
        })
    }

    return (
        <div className='BrandToggler-container'>
            <ul className='BrandToggler-list'>
                {renderOptions()}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(BrandToggler);