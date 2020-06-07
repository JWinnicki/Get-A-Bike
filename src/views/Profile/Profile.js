import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Profile.css';
import { logout, fetchUserOrders, deleteItem, clearOrdersArr } from '../../store/actions/index';
import CardMenu from '../../components/CardMenu/CardMenu';
import OrderItem from './ProfileComponents/OrderItem/OrderItem';
import Spinner from '../../components/Spinner/Spinner';
import BasicButton from '../../components/atoms/BasicButton/BasicButton';

class Profile extends React.Component {

    state={ 
        menuCards: ['Upcoming', 'In Progres', 'History'],
        selected: 'Upcoming'
    }

    componentDidMount() {

        if(this.props.token !== null && this.props.userId !== null) {
            this.props.onClearOrers();
            this.props.onFetchUserOrders(this.props.token, this.props.userId);
        }

    }

    selectPageHandler = selectedPage => {

        const newPage = selectedPage;

        this.setState({selected: newPage});
    }

    filterOrdersHandler = () => {

        const now = new Date().getTime();

        if(this.state.selected === 'Upcoming') {
            return this.props.userOrders.filter(el => new Date(el.start.startYear, el.start.startMonth - 1, el.start.startDay, el.start.startHour).getTime() > now)
        } else if(this.state.selected === 'History') {
            return this.props.userOrders.filter(el => new Date(el.end.endYear, el.end.endMonth - 1, el.end.endDay, el.start.startHour).getTime() < now)
        } else {
            return this.props.userOrders.filter(el => (new Date(el.end.endYear, el.end.endMonth - 1, el.end.endDay, el.start.startHour).getTime() >= now && new Date(el.start.startYear, el.start.startMonth - 1, el.start.startDay, el.start.startHour).getTime() <= now))
        }
    }

    renderOrdersHandler = () => {
        const filteredOrders = this.filterOrdersHandler().sort((a, b) => {
            return new Date(a.start.startYear, a.start.startMonth - 1, b.start.startDay, a.start.startHour).getTime() - new Date(b.start.startYear, b.start.startMonth - 1, b.start.startDay, b.start.startHour).getTime()
        });

        if(this.props.loading) {
            return <div><Spinner /></div>
        } else {
            if(filteredOrders.length === 0) {
                return <div><p>No orders to show :(</p></div>
            } else {
                return filteredOrders.map(el => {
                    return <OrderItem
                            key={el.id} 
                            model={el.selectedModel}
                            end={el.end}
                            start={el.start}
                            city={el.city}
                            orderId={el.id}
                            rentalOption={el.rentalOption} 
                            clicked={this.props.onDeleteItem}
                            displayDeleteBtn={this.state.selected === 'Upcoming' ? true : false}
                        />
                })
            }
                
        }
    }

    render() {
        return(
            <div className='profile-container'>
                {this.props.token === null ? <Redirect to={`/`} /> : null}
                
                <div className='profile-content'>
                    <div className='profile-controls'>
                        <CardMenu selected={this.state.selected} options={this.state.menuCards} clicked={this.selectPageHandler} />
                    </div>
                    <div className='profile-body'>
                        <div className='profile-whiteBar top'></div>
                        <div className='profile-orders__div'>
                            {this.renderOrdersHandler()}
                        </div>
                        <div className='profile-personal__div'>
                            <BasicButton onClick={this.props.onLogout}>Log Out</BasicButton>
                        </div>
                        <div className='profile-whiteBar bottom'></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        userOrders: state.orders.userOrders,
        loading: state.orders.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
        onFetchUserOrders: (token, userId) => dispatch(fetchUserOrders(token, userId)),
        onDeleteItem: orderId => dispatch(deleteItem(orderId)),
        onClearOrers: () => dispatch(clearOrdersArr())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);