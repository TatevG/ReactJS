import React from "react";

import Sidebar from "./components/sidebar";
import Input from "./components/input";
import Result from "./components/result";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    data: [],
    weatherObj:{
      title: '',
      parent:'',
      aboutWether:{},
    },
    msg:'',
    searchDone: false,
  };
  this.lickHandler = this.clickHandler.bind(this);
}

  changeHandler = event => {
    this.setState({ title: event.target.value });
  }
  clickHandler = async () => {
    const {title} = this.state;
    let data = null;
    let weatherObj = null;
      const first_request = await fetch(`https://www.metaweather.com/api/location/search/?query=${title}`);
      data = await first_request.json();
      const second_request = await fetch(`https://www.metaweather.com/api/location/${data[0].woeid}/`);
      weatherObj = await second_request.json();
      const resultObj = {
        title: weatherObj.title,
        parent: weatherObj.parent.title,
        aboutWether:weatherObj.consolidated_weather,
      }
    this.setState({
      weatherObj: resultObj,
      msg:'',
      searchDone: true
    });
  }
  render() {
    const { weatherObj, msg, searchDone } = this.state;
    // console.log(weatherObj);
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Sidebar />
                </div>
                <div className="col-xs-7 form-container">
                  <Input
                    changeHandler={this.changeHandler}
                    clickHandler={this.clickHandler} />
                    {searchDone && (
                  <Result
                    weather={this.state.weatherObj.aboutWether}
                    city={this.state.weatherObj.title}
                    country = {this.state.weatherObj.parent}
                  />
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
