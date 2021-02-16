import React from 'react';



class WeatherList extends React.Component {


    state = { url: '' }


    componentDidUpdate() {
        window.addEventListener('load', this.setWeather())
    }

    setWeather = () => {

        //if (this.props.days === false) { return }
        //console.log(this.props.days[0].weather[0].icon, 'weatherlistiltä')
        //console.log(this.state, "homo")
        //let icon = this.props.days[0].weather[0].icon
        //console.log(icon)
        /*
        
                if (!this.props.days) {
                    return console.log('Loading...')
                } else {
                    const icon = this.props.days[0].weather[0].icon
                    const url = `http://openweathermap.org/img/wn/${icon}.png`
                    return url
                }
                */
        //    return <div>{this.props.day[0].weather[0].icon}</div>
        // }
        //return <div>{this.props.day[0].weather[0].icon}</div>
        //const url = `http://openweathermap.org/img/wn/${icon}.png`
        //console.log(url)

        //return url

        //if (icon !== this.state.url) {
        //    this.setState({ url: `http://openweathermap.org/img/wn/${icon}.png` })
        // }

        //this.setState({ url: `http://openweathermap.org/img/wn/${icon}.png` })

        // console.log(this.state, "hintti")
        //this.set.state({ url: `http://openweathermap.org/img/wn/${icon}.png` })
    }


    // console.log(this.props.days[0].weather[0].icon, 'weatherlistiltä')


    render() {
        //console.log(this.props.days, 'weatherlistiltä')
        return <div>homo</div>
    }
};

export default WeatherList;