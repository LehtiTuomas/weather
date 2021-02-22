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
        dayIDend: null,
        color1: "",
        color2: "",
        color3: ""
    };

    componentDidMount() {
        const memory = localStorage.getItem('search')
        if (!memory) {
            this.onSearchSubmit('Turku')
        } else {
            this.onSearchSubmit(memory)
        }
    }

    // error handling for api call
    onSearchSubmit = (term) => {
        this.Search(term).catch((error) => {
            if (error.response) { this.setState({ selectedDay: null, city: 'Kaupunkia ei löydy' }) }
            else if (error.request) { this.setState({ selectedDay: null, city: 'Ei internet yhteyttä' }) }
            else { this.setState({ selectedDay: null, city: 'Jokin meni pieleen' }) }
        })
    }

    // when user gives city, get data from Openweather
    Search = async term => {
        const response = await Openweather.get('/data/2.5/forecast', {
            params: { q: term, units: 'metric', lang: 'fi' }
        });

        this.setState({ days: response.data.list, selectedDay: 1, city: term })

        localStorage.setItem('search', this.state.city)

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

    colorHandler = (code1, code2, code3) => {
        this.setState({ color1: code1, color2: code2, color3: code3 })
    }


    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <br></br>
                <WeatherItem
                    days={this.state.days}
                    city={this.state.city}
                    select={this.state.selectedDay}
                />
                <OneDay
                    select={this.state.selectedDay}
                    days={this.state.days}
                    selectDay={this.handler}
                    dayName={this.dayNameHandler}
                    dayStart={this.dayStartHandler}
                    dayEnd={this.dayEndHandler}
                    color1={this.state.color1}
                    color2={this.state.color2}
                    color3={this.state.color3}
                    color={this.colorHandler}
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