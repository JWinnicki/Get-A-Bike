import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//TODO Zbędny import do wywalenia
//import Logo from '../../img/Logos/Kawasaki-logo.jpg';
import './BrandLogoItem.css'
import {selectBrand} from '../../store/actions/motorcycles';

class BrandLogoItem extends Component {

    selectBrandHandler = () => {
        this.props.onSelectBrand(this.props.brandName);
    }

    render() {
        //Proszę poczytać czym się rózni const, let i var przyda się na rozmowy rekrutacyjne
        let className = `Logo-div ${this.props.borderColor}`

        return (
            <Link className={className} onClick={this.selectBrandHandler} to={`/motorcycles/${this.props.brandName}`}>
                <img src={this.props.logo} alt={`${this.props.brandName} Logo`}/>
            </Link>
        );
    }
}
//Usuwamy pusty kod
const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectBrand: brandName => dispatch(selectBrand(brandName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandLogoItem);
