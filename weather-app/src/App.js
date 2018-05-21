import React, { Component } from "react";
import "./css/App.css";

import SearchBar from "./components/search";
import Result from "./components/result";

const API_KEY = "7b41e633aaec63e8c43b3f57998510fa";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: {
        weather: "",
        city: "",
        country: "",
        temp: 0
      },
      searchDone: false,
      errorMessage: ""
    };

    this.callWeatherData = this.callWeatherData.bind(this);
  }

  callWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        });
      })
      .catch(error => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ errorMessage: error.message });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  render() {
    const { searchDone, weatherData, errorMessage } = this.state;
    // console.log(weatherData);
    return (
      <div className="App">
        <SearchBar
          callBackFromParent={this.callWeatherData}
          error={errorMessage}
        />
        {searchDone && (
          <Result
            // In case if you want to send the entire object to the component:
            // weatherData={weatherData}
            weather={this.state.weatherData.weather}
            city={this.state.weatherData.city}
            temp={this.state.weatherData.temp}
            country = {this.state.weatherData.country}
          />
        )}
      </div>
    );
  }
}

export default App;
