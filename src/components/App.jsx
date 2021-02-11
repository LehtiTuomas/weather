import './App.css'
import React from 'react';
import Openweather from '../api/Openweather';

import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import WeatherItem from './WeatherItem';


class App extends React.Component {
    state = { days: [] };

    // when user gives city, get data from Openweather
    onSearchSubmit = async term => {
        const response = await Openweather.get('/data/2.5/forecast', {
            params: { q: term, units: 'metric', lang: 'fi' }
        });

        console.log(response)
    }




    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <WeatherList />
                <WeatherItem />
            </div>
        );
    }
};

export default App;