import './App.css'
import React from 'react';
import Openweather from '../api/Openweather';

import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import WeatherItem from './WeatherItem';
import OneDay from './OneDay';


class App extends React.Component {
    state = { days: [], selectedDay: null, city: 'Turku' };

    componentDidMount() {
        this.onSearchSubmit('Turku')
    }

    // when user gives city, get data from Openweather
    onSearchSubmit = async term => {
        const response = await Openweather.get('/data/2.5/forecast', {
            params: { q: term, units: 'metric', lang: 'fi' }
        });

        this.setState({ days: response.data.list, selectedDay: 1, city: term })


    }




    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <WeatherList days={this.state.days} />
                <WeatherItem days={this.state.days} city={this.state.city} />
                <OneDay select={this.state.selectedDay} days={this.state.days} city={this.state.city} />
            </div>
        );
    }
};

export default App;