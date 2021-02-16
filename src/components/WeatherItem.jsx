import './Weather1.css'
import React from 'react';


const WeatherItem = (props) => {
    const city = props.city
    const cityUp = city.toUpperCase()
    return (
        <div className=" ui cards wall">
            <div className="card">
                <div className="content">
                    <div className="header">{cityUp}</div>
                </div>
            </div>
        </div>
    )
}


export default WeatherItem;