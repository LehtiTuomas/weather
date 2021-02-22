import './Weather1.css'
import React from 'react';


const WeatherItem = (props) => {
    const city = props.city

    const smallOrBig = () => {
        if (!props.select) {
            return city
        } else {
            const cityUp = city.toUpperCase()
            return cityUp
        }
    }


    return (
        <div className=" ui cards wall">
            <div className="card">
                <div className="content">
                    <div className="header">{smallOrBig()}</div>
                </div>
            </div>
        </div>
    )
}


export default WeatherItem;