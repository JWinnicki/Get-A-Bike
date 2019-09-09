import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './SidebarElement.css';
import { selectBrand, selectBikes } from '../../store/actions/motorcycles';

class SidebarElement extends Component {

    onClickHandler = () => {

        this.props.onSelectBrand(this.props.name);

        const motorcyclesList = [];

        this.props.motoList.forEach(el => {
            if(el.brand === this.props.name){
                motorcyclesList.push(el);
            }
        });

        this.props.onSelectBikes(motorcyclesList);

    }

    render() {
        let active = '';
        if (this.props.name === this.props.selectedBrand) {
            active = 'active';
        }

        return(
            <li onClick={this.onClickHandler} className={`Sidebar-list__item ${this.props.name} ${active}`}>
                <Link className='Sidebar-list__link' to={`/motorcycles/${this.props.name}`}>{this.props.name}</Link>
            </li>
        );
    }
}

const mapStateToProps = state => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarElement);
