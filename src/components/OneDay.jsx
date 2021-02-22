import './OneDay.css'
import React from 'react';

const OneDay = (props) => {


    // Show 'Loading...' if api not nownloaded
    if (!props.select) {

        return <div></div>
    }


    //console.log(props.select, props.days, props.city, 'OneDay2')

    // Tomorrow UTC 12.00
    const tomorrowUTC = (time) => {


        let date = new Date(); //get today date

        date.setHours(time, 0, 0, 0) // set time
        let tomorrow = date.setDate(date.getDate() + 1) // get tomorrow date and time in milliseconds
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
        const days = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];

        return days[(new Date(e).getUTCDay())]
    };


    // get the name for tomorrow and day after that
    const dayName1 = dayName(tomorrowUTC(12) * 1000)
    const dayName2 = dayName((tomorrowUTC(12) + 86400) * 1000)

    // get the index number for tomorrof and day after that
    const day1ID = search().indexOf(tomorrowUTC(12));
    const day2ID = search().indexOf(tomorrowUTC(12) + 86400);


    // get data to show detatailed information:

    // get index numbers for first weather (00:00)
    const day1IDFirst = search().indexOf(tomorrowUTC(0));
    const day2IDFirst = search().indexOf(tomorrowUTC(0) + 86400);

    // get index number for last weather (21:00)
    const dayIDLast = search().indexOf(tomorrowUTC(21) - 86400);
    const day1IDLast = search().indexOf(tomorrowUTC(21));
    const day2IDLast = search().indexOf(tomorrowUTC(21) + 86400);





    // Handle click from weathercard and update state in App component
    const handleClick = (e) => {

        props.selectDay(e);

        //Update name of the day, day color and day start/end timecodes to App state
        if (e === 1) {
            props.dayName(day);
            props.dayStart(0);
            props.dayEnd(dayIDLast);
            props.color('rgb(230,230,230', '', '')
        } else if (e === 2) {
            props.dayName(day2)
            props.dayStart(day1IDFirst);
            props.dayEnd(day1IDLast);
            props.color('', 'rgb(230,230,230', '')
        } else if (e === 3) {
            props.dayName(day3)
            props.dayStart(day2IDFirst);
            props.dayEnd(day2IDLast);
            props.color('', '', 'rgb(230,230,230)')
        } else {
            props.dayName(day);
            props.dayStart(0);
            props.dayEnd(dayIDLast)
        }

    }

    // variables for different days

    // today
    const icon = props.days[0].weather[0].icon
    const url = `http://openweathermap.org/img/wn/${icon}.png`
    const temp = Math.round(props.days[0].main.temp)
    const day = 'Tänään'

    // day 2
    const icon2 = props.days[day1ID].weather[0].icon
    const url2 = `http://openweathermap.org/img/wn/${icon2}.png`
    const temp2 = Math.round(props.days[day1ID].main.temp)
    const day2 = dayName1

    // day 3
    const icon3 = props.days[day2ID].weather[0].icon
    const url3 = `http://openweathermap.org/img/wn/${icon3}.png`
    const temp3 = Math.round(props.days[day2ID].main.temp)
    const day3 = dayName2


    // ui link eight doubling cards wall

    return (
        <div className="ui link eight doubling cards wall" >
            <div className="better-card" style={{ backgroundColor: props.color1 }} onClick={() => { handleClick(1) }}>
                <div className="better-content">
                    <div className="better-content-header">{day}</div>
                    <img className="better-content-icon" alt="" src={url} />
                    <div className="better-content-temp">{temp}  ℃ </div>
                </div>
            </div>
            <div className="better-card center" style={{ backgroundColor: props.color2 }} onClick={() => { handleClick(2) }}>
                <div className="better-content">
                    <div className="better-content-header">{day2}</div>
                    <img className="better-content-icon" alt="" src={url2} />
                    <div className="better-content-temp">{temp2}  ℃ </div>
                </div>
            </div>
            <div className="better-card" style={{ backgroundColor: props.color3 }} onClick={() => { handleClick(3) }}>
                <div className="better-content">
                    <div className="better-content-header">{day3}</div>
                    <img className="better-content-icon" alt="" src={url3} />
                    <div className="better-content-temp">{temp3}  ℃ </div>
                </div>
            </div>
        </div>);


};

export default OneDay;