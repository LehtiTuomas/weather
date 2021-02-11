import './App.css'
import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import WeatherItem from './WeatherItem';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <WeatherList />
                <WeatherItem />
            </div>
        );
    }
};

export default App;