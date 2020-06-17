import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './BrandToggler.module.scss';
import {selectBrand, selectBikes} from '../../store/actions/motorcycles';

const BrandToggler = ({motoList, onSelectBrand, onSelectBikes, brands, selectedBrand}) => {

    const onClickHandler = name => {
        onSelectBrand(name);

        const motorcyclesList = motoList.filter(el => {
            return el.brand === name
        });
        
        onSelectBikes(motorcyclesList);
    }

    const renderOptions = () => {
        
        return brands.map(el => {
            const style = selectedBrand === el.name ? styles.BrandTogglerListItemLinkActive : styles.BrandTogglerListItemLink;
            
            return (
                <li onClick={() => onClickHandler(el.name)} key={el.name} className={styles.BrandTogglerListItem}>
                    <Link className={style} to={`/motorcycles/${el.name}`}>{el.name}</Link>
                </li>
            );
        })
    }

    return (
        <div className={styles.BrandToggler}>
            <ul className={styles.BrandTogglerList}>
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