import React, { Component } from 'react';

import './Cities.css';
import CityDataComponent from '../CityDataComponent/CityDataComponent';

class Cities extends Component {

    state = {
        citiesInfo: [
            { name: 'Gdańsk', street: 'randomstreet 1b', phone: '333 999 333', email: 'get-a-bike-gdansk@example.com' },
            { name: 'Kraków', street: 'randomstreet 5', phone: '444 333 333', email: 'get-a-bike-krakow@example.com' },
            { name: 'Warszawa', street: 'randomstreet 8', phone: '111 222 333', email: 'get-a-bike-warszawa@example.com' },
            { name: 'Wrocław', street: 'randomstreet 10', phone: '222 444 222', email: 'get-a-bike-wroclaw@example.com' }
        ]
    }

    renderComponents = () => {
        return this.state.citiesInfo.map(el => {
            return <CityDataComponent 
                        key={el.name} 
                        cityName={el.name} 
                        street={el.street}
                        phone={el.phone}
                        email={el.email}
                    />
        });
    }

    render() {
        return (
            <div className="Cities">{this.renderComponents()}</div>
        );
    }
}

export default Cities;