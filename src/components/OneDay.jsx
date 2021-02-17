import './OneDay.css'
import React from 'react';

import North from '@material-ui/icons/ArrowUpward';
import East from '@material-ui/icons/ArrowForward';
import South from '@material-ui/icons/ArrowDownward';
import West from '@material-ui/icons/ArrowBack';
import NI from '@material-ui/icons/CallMade';
import SE from '../south_east.svg';
import SW from '@material-ui/icons/CallReceived';
import NW from '../north_west.svg';


const OneDay = (props) => {

    // Show 'Loading...' if api not nownloaded
    if (!props.select) {

        return <div>Loading...</div>
    }

    //console.log(props.select, props.days, props.city, 'OneDay2')

    // Tomorrow UTC 12.00
    const tomorrowUTC = () => {


        let date = new Date(); //get today date

        date.setHours(12, 0, 0, 0) // set time 12.00
        let tomorrow = date.setDate(date.getDate() + 1) // get tomorrow date and 12.00 time in milliseconds
        let offset = new Date().getTimezoneOffset() * 60000; //get timezone offset in milliseconds


        if (offset <= 0) {
            let tomorrowUTC = tomorrow - offset // remove ofsset
            tomorrowUTC = (tomorrowUTC) / 1000; // remove 2 last digits
            return tomorrowUTC;
        } else {
            let tomorrowUTC = tomorrow + offset // add offset
            tomorrowUTC = (tomorrowUTC) / 1000; // remove 2 last digits
            return tomorrowUTC;
        }

    }

    // pull all timecodes from the api and put them in array 'times'
    const search = () => {

        let times = [];

        for (let i = 0; i < props.days.length; i++) {
            times.push(props.days[i].dt);
        }


        return times;
    }

    // Determine the name of the day from given UTC-code
    const dayName = (e) => {
        const days = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'];

        return days[new Date(e).getUTCDay() - 1];

    };

    // get the name for tomorrow and day after that
    const dayName1 = dayName(tomorrowUTC() * 1000)
    const dayName2 = dayName((tomorrowUTC() + 86400) * 1000)

    // get the index number for tomorrof and day after that
    const day1ID = search().indexOf(tomorrowUTC());
    const day2ID = search().indexOf(tomorrowUTC() + 86400);


    // deside wich wind direction arrow to show    
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

    // Handle click from weathercard and update state in App component
    const handleClick = (e) => {

        props.selectDay(e);

        //Update name of the day
        if (e === 1) {
            props.dayName(day)
        } else if (e === 2) {
            props.dayName(day2)
        } else if (e === 3) {
            props.dayName(day3)
        } else {
            props.dayName('error')
        }

    }

    // variables for different days

    // today
    const icon = props.days[0].weather[0].icon
    const url = `http://openweathermap.org/img/wn/${icon}.png`
    const temp = props.days[0].main.temp
    const wind = props.days[0].wind.speed
    const day = 'Tänään'
    const day1Wind = props.days[0].wind.deg

    // day 2
    const icon2 = props.days[day1ID].weather[0].icon
    const url2 = `http://openweathermap.org/img/wn/${icon2}.png`
    const temp2 = props.days[day1ID].main.temp
    const wind2 = props.days[day1ID].wind.speed
    const day2 = dayName1
    const day2Wind = props.days[day1ID].wind.deg

    // day 3
    const icon3 = props.days[day2ID].weather[0].icon
    const url3 = `http://openweathermap.org/img/wn/${icon3}.png`
    const temp3 = props.days[day2ID].main.temp
    const wind3 = props.days[day2ID].wind.speed
    const day3 = dayName2
    const day3Wind = props.days[day2ID].wind.deg


    return (
        <div className="ui link cards wall" >
            <div className="card" onClick={() => { handleClick(1) }}>
                <div className="content oneCard">
                    <div className="header">{day}</div>
                    <img className="center floated ui mini" alt="" src={url} />
                    <div className="description">{temp}  ℃ </div>
                    <div className="description">{wind} m/s </div>
                    <div className="description">{windIcon(day1Wind)}</div>
                </div>
            </div>
            <div className="card" onClick={() => { handleClick(2) }}>
                <div className="content oneCard">
                    <div className="header">{day2}</div>
                    <img className="center floated ui mini" alt="" src={url2} />
                    <div className="description">{temp2}  ℃ </div>
                    <div className="description">{wind2} m/s </div>
                    <div className="description">{windIcon(day2Wind)}</div>
                </div>
            </div>
            <div className="card" onClick={() => { handleClick(3) }}>
                <div className="content oneCard">
                    <div className="header">{day3}</div>
                    <img className="center floated ui mini" alt="" src={url3} />
                    <div className="description">{temp3}  ℃ </div>
                    <div className="description">{wind3} m/s </div>
                    <div className="description">{windIcon(day3Wind)}</div>
                </div>
            </div>
        </div>);


};

export default OneDay;