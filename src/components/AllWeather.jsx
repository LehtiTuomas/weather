import './AllWeather.css';
import React from 'react';

import North from '@material-ui/icons/ArrowUpward';
import East from '@material-ui/icons/ArrowForward';
import South from '@material-ui/icons/ArrowDownward';
import West from '@material-ui/icons/ArrowBack';
import NI from '@material-ui/icons/CallMade';
import SE from '../south_east.svg';
import SW from '@material-ui/icons/CallReceived';
import NW from '../north_west.svg';

const AllWeather = (props) => {
    if (!props.select) {

        return <div>Loading...</div>
    };
    //console.log(props.days)

    // Get start and end time index from props 
    // the crazy name "koira" is there because for some reason nothing else works
    const start = props.dayIdStart;
    const end = props.koira;

    // Make a new array from a selected day
    const allDays = props.days
    const oneDay = allDays.slice(start, end + 1)

    // Make a new "times" array where are all local times for selected day
    const time = () => {

        let times = [];

        if (start === null) {
            return times
        }

        for (let i = 0; i < oneDay.length; i++) {

            let timecode = props.days[i].dt;
            let date = new Date(timecode * 1000);
            let hours = date.getHours();

            times.push(hours)

        }

        times.sort(function (a, b) { return a - b });

        return times

    };


    const temp = () => {
        let allTemps = []

        if (start === null) {
            return allTemps
        }

        for (let i = 0; i < oneDay.length; i++) {
            let tempHour = oneDay[i].main.temp;
            allTemps.push(tempHour);
        }
        return allTemps;
    };

    const wind = () => {
        let allWind = [];

        if (start === null) {
            return allWind
        }

        for (let i = 0; i < oneDay.length; i++) {
            let speed = oneDay[i].wind.speed;
            allWind.push(speed);
        }
        return allWind;


    };

    const windDir = () => {
        let allWindDir = [];

        if (start === null) {
            return allWindDir
        }

        for (let i = 0; i < oneDay.length; i++) {
            let wind = oneDay[i].wind.deg;
            allWindDir.push(wind);
        }
        return allWindDir;


    };


    const windIcon = (wind) => {
        if (wind > 20 & wind < 70) {
            return <SW />
        }
        if (wind >= 70 & wind <= 110) {
            return <West />
        }
        if (wind > 110 & wind < 150) {
            return <img className="windDir" alt="NW" src={NW} />
        }
        if (wind >= 150 & wind <= 200) {
            return <North />
        }
        if (wind > 200 & wind < 230) {
            return <NI />
        }
        if (wind >= 230 & wind <= 270) {
            return <East />
        }
        if (wind > 270 & wind < 340) {
            return <img className="windDir" alt="SE" src={SE} />
        }
        if (wind >= 340 & wind <= 360) {
            return <South />
        }
        if (wind >= 0 & wind <= 20) {
            return <South />
        }

    };

    const icon = () => {
        let allIcons = [];

        if (start === null) {
            return allIcons
        }

        for (let i = 0; i < oneDay.length; i++) {
            let oneIcon = oneDay[i].weather[0].icon;
            allIcons.push(oneIcon);
        }
        return allIcons;


    };


    // Running id number for react key
    let id = 1
    const newId = () => {
        id = id + 1;
        return id
    };

    // New running row number starting from 1 for temp css
    let row = 0
    const newRow = () => {
        row = row + 1;
        return row
    };

    // New row for wind css
    let rowWind = 0
    const newRowWind = () => {
        rowWind = rowWind + 1;
        return rowWind
    };

    // New row for wind icon css
    let rowWindIcon = 0
    const newRowWindIcon = () => {
        rowWindIcon = rowWindIcon + 1;
        return rowWindIcon
    };

    // New row for weathericon css
    let weatherIcon = 0
    const newWeatherIcon = () => {
        weatherIcon = weatherIcon + 1;
        return weatherIcon
    };


    const selecIcon = (icon) => {
        return `http://openweathermap.org/img/wn/${icon}.png`
    }


    return (
        <div className="ui cards wall">
            <div className="card">
                <div className="content">
                    <div className="header">{props.dayName}</div>
                    <div className="detail-container">
                        {time().map(item => <div className="item-a" key={newId()}>{item}:00 </div>)}
                        {icon().map(item => <img alt={item} style={{ gridRowStart: `${newWeatherIcon()}` }} className="item-e" key={newId()} src={selecIcon(item)} />)}
                        {temp().map(item => <div style={{ gridRowStart: `${newRow()}` }} className="item-b" key={newId()}>{item} ℃ </div>)}
                        {wind().map(item => <div style={{ gridRowStart: `${newRowWind()}` }} className="item-c" key={newId()}>{item} m/s </div>)}
                        {windDir().map(item => <div style={{ gridRowStart: `${newRowWindIcon()}` }} className="item-d" key={newId()}>{windIcon(item)}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllWeather;