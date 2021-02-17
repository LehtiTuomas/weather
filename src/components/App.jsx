import './App.css'
import React from 'react';
import Openweather from '../api/Openweather';

import SearchBar from './SearchBar';
import WeatherItem from './WeatherItem';
import OneDay from './OneDay';
import AllWeather from './AllWeather';


class App extends React.Component {
    state = { days: [], selectedDay: null, city: '', dayName: 'Tänään' };

    componentDidMount() {
        this.onSearchSubmit('Turku')
    }

    // when user gives city, get data from Openweather
    onSearchSubmit = async term => {
        const response = await Openweather.get('/data/2.5/forecast', {
            params: { q: term, units: 'metric', lang: 'fi' }
        });

        this.setState({ days: response.data.list, selectedDay: 1, city: term })
        console.log(this.state)

    }

    handler = (day) => {
        this.setState({ selectedDay: day })
    }

    dayNameHandler = (name) => {
        this.setState({ dayName: name })
    }



    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <br></br>
                <WeatherItem days={this.state.days} city={this.state.city} />
                <OneDay select={this.state.selectedDay} days={this.state.days} selectDay={this.handler} dayName={this.dayNameHandler} />
                <AllWeather select={this.state.selectedDay} dayName={this.state.dayName} />
            </div>
        );
    }
};

export default App;