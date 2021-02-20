import './App.css'
import React from 'react';
import Openweather from '../api/Openweather';

import SearchBar from './SearchBar';
import WeatherItem from './WeatherItem';
import OneDay from './OneDay';
import AllWeather from './AllWeather';


class App extends React.Component {
    state = {
        days: [],
        selectedDay: null,
        city: '',
        dayName: 'Valitse päivä',
        dayIDstart: null,
        dayIDend: null

    };

    componentDidMount() {
        this.onSearchSubmit('Turku')//.catch((error) => { console.log(error.message) })
    }

    // when user gives city, get data from Openweather
    /*
    onSearchSubmit = async term => {
        const response = await Openweather.get('/data/2.5/forecast', {
            params: { q: term, units: 'metric', lang: 'fi' }
        });

        this.setState({ days: response.data.list, selectedDay: 1, city: term })

    }*/

    // error handling for api call
    onSearchSubmit = (term) => {
        this.Search(term).catch((error) => {
            if (error.response) { this.setState({ selectedDay: null, city: 'Kaupunkia ei löydy' }) }
            else if (error.request) { this.setState({ selectedDay: null, city: 'Ei internet yhteyttä' }) }
            else { this.setState({ selectedDay: null, city: 'jokin meni pieleen' }) }
        })
    }

    // when user gives city, get data from Openweather
    Search = async term => {
        const response = await Openweather.get('/data/2.5/forecast', {
            params: { q: term, units: 'metric', lang: 'fi' }
        });

        this.setState({ days: response.data.list, selectedDay: 1, city: term })

    }





    handler = (day) => {
        this.setState({ selectedDay: day })
    }

    dayNameHandler = (name) => {
        this.setState({ dayName: name })
    }

    dayStartHandler = (id) => {
        this.setState({ dayIDstart: id })
    }

    dayEndHandler = (id) => {
        this.setState({ dayIDend: id })
    }



    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <br></br>
                <WeatherItem days={this.state.days} city={this.state.city} />
                <OneDay
                    select={this.state.selectedDay}
                    days={this.state.days}
                    selectDay={this.handler}
                    dayName={this.dayNameHandler}
                    dayStart={this.dayStartHandler}
                    dayEnd={this.dayEndHandler}
                />
                <AllWeather
                    koira={this.state.dayIDend}
                    select={this.state.selectedDay}
                    dayName={this.state.dayName}
                    days={this.state.days}
                    dayIdStart={this.state.dayIDstart}
                />
            </div>
        );
    }
};

export default App;