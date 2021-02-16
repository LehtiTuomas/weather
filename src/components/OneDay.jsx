import './OneDay.css'
import React from 'react';

const OneDay = (props) => {
    if (!props.select) {

        return <div>Loading...</div>
    }

    console.log(props.select, props.days, props.city, 'OneDay2')

    // Tomorrow UTC 12.00
    const tomorrowUTC = () => {


        let date = new Date(); //get today date

        date.setHours(12, 0, 0, 0) // set time 12.00
        let tomorrow = date.setDate(date.getDate() + 1) // get tomorrow date and 12.00 time in milliseconds
        let offset = new Date().getTimezoneOffset() * 60000; //get timezone offset in milliseconds

        // console.log(props.days[7].dt, 'propsilta')


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

    const dayName1 = dayName(tomorrowUTC() * 1000)
    const dayName2 = dayName((tomorrowUTC() + 86400) * 1000)
    const dayName3 = dayName((tomorrowUTC() + 86400 * 2) * 1000)
    const dayName4 = dayName((tomorrowUTC() + 86400 * 3) * 1000)

    const day1ID = search().indexOf(tomorrowUTC());
    const day2ID = search().indexOf(tomorrowUTC() + 86400);
    const day3ID = search().indexOf(tomorrowUTC() + (86400 * 2));
    const day4ID = search().indexOf(tomorrowUTC() + (86400 * 3));



    console.log(props.days[day1ID], dayName1);
    console.log(props.days[day2ID], dayName2);
    console.log(props.days[day3ID], dayName3);
    console.log(props.days[day4ID], dayName4);


    // today
    const icon = props.days[0].weather[0].icon
    const url = `http://openweathermap.org/img/wn/${icon}.png`
    const temp = props.days[0].main.temp
    const wind = props.days[0].wind.speed
    const day = 'Tänään'

    // day 2
    const icon2 = props.days[day1ID].weather[0].icon
    const url2 = `http://openweathermap.org/img/wn/${icon2}.png`
    const temp2 = props.days[day1ID].main.temp
    const wind2 = props.days[day1ID].wind.speed
    const day2 = dayName1

    // day 3
    const icon3 = props.days[day2ID].weather[0].icon
    const url3 = `http://openweathermap.org/img/wn/${icon3}.png`
    const temp3 = props.days[day2ID].main.temp
    const wind3 = props.days[day2ID].wind.speed
    const day3 = dayName2


    return (
        <div className="ui cards wall">
            <div className="card">
                <div className="content oneCard">
                    <div className="header">{day}</div>
                    <img className="center floated ui mini" alt="" src={url} />
                    <div className="description">{temp}  ℃ {wind} m/s </div>
                </div>
            </div>
            <div className="card">
                <div className="content oneCard">
                    <div className="header">{day2}</div>
                    <img className="center floated ui mini" alt="" src={url2} />
                    <div className="description">{temp2}  ℃ {wind2} m/s </div>
                </div>
            </div>
            <div className="card">
                <div className="content oneCard">
                    <div className="header">{day3}</div>
                    <img className="center floated ui mini" alt="" src={url3} />
                    <div className="description">{temp3}  ℃ {wind3} m/s </div>
                </div>
            </div>
        </div>);


};

export default OneDay;