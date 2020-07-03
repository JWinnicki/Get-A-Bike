import React from 'react';
import {Link} from 'react-router-dom';

import styles from './BrandToggler.module.scss';

const BrandToggler = ({brands, selectedBrand, clicked}) => {

    const renderOptions = () => {
        
        return brands.map(el => {
            const style = selectedBrand === el.name ? styles.BrandTogglerListItemLinkActive : styles.BrandTogglerListItemLink;
            
            return (
                <li onClick={() => clicked(el.name)} key={el.name} className={styles.BrandTogglerListItem}>
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

export default BrandToggler;