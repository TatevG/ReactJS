import React from "react";

const Result = ({ error, weather, country, city }) =>{
	if(weather && country && city){
		return (
      <div className="WeatherCard">
				<h2 className="WeatherCard-city">
		      City: {city}
		    </h2>
				<h2 className="WeatherCard-city">
		    	Country: {country}
		    </h2>
				<h2 className="WeatherCard-humidity">
					Humidity: {weather[0].humidity}%
		    </h2>
		    <h2 className="WeatherCard-degrees">
					Min Temp: {Math.round(weather[0].min_temp)}°
				</h2>
				<h2 className="WeatherCard-degrees">
					Max Temp: {Math.round(weather[0].max_temp)}°
				</h2>
		    <h2 className="WeatherCard-icon-container">
		      Icon: <img src={`https://www.metaweather.com/static/img/weather/ico/${weather[0].weather_state_abbr}.ico`} alt = "Image" />
		    </h2>
      </div>
    );
	}else{
		alert({error});
	}	
}

export default Result;
