import React, { Component } from 'react';
import { connect} from 'react-redux';

import './Sidebar.css';
import SidebarElement from '../SidebarElement/SidebarElement';

class Sidebar extends Component {

    renderElements = () => {
        return this.props.brands.map(el => {
                return <SidebarElement name={el.name} key={el.name} />
            })
        
    }

    render() {
        return(
            <div className='Sidebar'>
                <ul className='Sidebar-list'>
                    {this.renderElements()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        brands: state.motorcycles.brands
    }
}

const mapDispatchToProps = dispatch => {
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);