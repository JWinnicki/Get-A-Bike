import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MotoCollection.css';
import MotoCard from '../MotoCard/MotoCard';

class MotoCollection extends Component {

    renderBikesList = () => {
        if(this.props.motoArr) {
            return this.props.motoArr.map(el => {
                return <MotoCard 
                            key={el.model}
                            image={el.image}
                            name={el.model}
                            type={el.type}
                            subType={el.subType}
                            engineSize={el.engineSize}
                            power={el.hp}
                        />
            });
        }
        
    }

    render() {
        return (
            <div className='MotoCollection'>
                {this.renderBikesList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        motoArr: state.motorcycles.selectedBikes
    }
}

export default connect(mapStateToProps)(MotoCollection);