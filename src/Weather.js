import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  state = {
    periods: [],
  };

  componentDidMount() {
    let city = this.props.city;
    let days = 5;
    let apiKey = "78c3502f87593a53c3958c826a55eddc";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&appid=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    return <h1>Weather</h1>;
  }
}

export default Weather;
