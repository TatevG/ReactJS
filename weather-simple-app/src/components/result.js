import React, { Component } from "react";
import "../css/result.css";
import "../css/weather-icons.min.css";

class Result extends Component {

  render() {
    const { city, weather, country, temp } = this.props.weatherData;
    const celcius = Math.round(temp - 273.15);
    // console.log(weather);
    return (
      <div className="WeatherCard">
        <h1 className="WeatherCard-degrees">{celcius}°</h1>
        <div className="WeatherCard-icon-container">
          <i className={`wi wi-owm-${weather[0].id} WeatherCard-icon`} />
          <p>{weather[0].main}</p>
        </div>
        <h2 className="WeatherCard-city">
          {city}, {country}
        </h2>
      </div>
    );
  }
}

export default Result;
