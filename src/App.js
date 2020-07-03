import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.scss';
import Main from './views/Main/Main';
import Cities from './views/Cities/Cities';
import BrandLogosList from './views/MotorcyclesMenu/BrandLogosList';
import MotorcyclesListDisplay from './views/MotorcyclesListDisplay/MotorcyclesListDisplay';
import Offer from './views/Offer/Offer';
import RentFormContainer from './views/RentFormContainer/RentFormContainer';
import LogInContainer from './views/LogInContainer/LogInContainer';
import Profile from './views/Profile/Profile';
import {authCheckState} from './store/actions/index';
import CheckIfAvailable from './views/CheckIfAvailable/CheckIfAvailable';
import MainTemplate from './templates/MainTemplate/MainTemplate';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoLogIn();
  }

  render() {
    return (
      <div className="container">
        <MainTemplate>
          <div className='Main'>
            <Switch>
              <Route path='/cities' exact component={Cities} />
              <Route path='/motorcycles' exact component={BrandLogosList} />
              <Route path='/motorcycles/:brand' exact component={MotorcyclesListDisplay} />
              <Route path='/offer' exact component={Offer} />
              <Route path='/review' exact component={Cities} />
              <Route path='/rent/:name' exact component={RentFormContainer} />
              <Route path='/login' exact component={LogInContainer} />
              <Route path='/profile' exact component={Profile} />
              <Route path='/check_if_available' component={CheckIfAvailable} />
              <Route path='/' exact component={Main} />
            </Switch>
          </div>
        </MainTemplate>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogIn: () => dispatch(authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);
