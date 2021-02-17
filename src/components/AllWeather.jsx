import './AllWeather.css';
import React from 'react';

const AllWeather = (props) => {




    return (
        <div className="ui cards wall">
            <div className="card">
                <div className="content oneCard">
                    <div className="header">{props.select} <br></br>{props.dayName}</div>
                    <div>24 tunnin sää tähän jollain taikatempulla</div>
                </div>
            </div>
        </div>
    );
}

export default AllWeather;

/*
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


*/