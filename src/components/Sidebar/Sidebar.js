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
            <nav>
                <div className='Sidebar'>
                    <ul className='Sidebar-list'>
                        {this.renderElements()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        brands: state.motorcycles.brands
    }
}

export default connect(mapStateToProps)(Sidebar);