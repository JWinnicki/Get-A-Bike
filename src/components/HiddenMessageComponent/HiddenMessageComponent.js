import React from 'react';

import Icon from '../Icon/Icon';
import './HiddenMessageComponent.css';

class HiddenMessageComponent extends React.Component {

    state = {
        show: false
    }

    onClickHandler = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return(
            <div className='HiddenMessage-container'>
                <div className='HiddenMessage-iconsContainer' onClick={this.onClickHandler}>
                    <Icon size='tiny' icon='information' />
                    <div style={{ transform: this.state.show ? 'rotate(-90deg)' : 'rotate(90deg)' }} className='HiddenMessage-iconsContainer__arrow'>
                        <Icon size='tiniest' icon='arrow-right' />
                    </div>
                </div>
                <div 
                    style={{
                        display: this.state.show ? 'flex' : 'none'
                        /* opacity: this.state.show ? '1' : '0',
                        transform: this.state.show ? 'translateY(0)' : 'translateY(-100vh)',
                        marginBottom: this.state.show ? '3rem' : '0' */
                    }}
                    className={this.state.show ? 'HiddenMessage-content' : 'HiddenMessage-content HiddenMessage-content--hidden'}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HiddenMessageComponent;

