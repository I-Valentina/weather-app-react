import React, { useState } from "react";
import ForecastToday from "./ForecastToday";
import UpcomingForecast from "./UpcomingForecast";

import axios from "axios";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: formatHours(response.data.sys.sunrise * 1000),
      sunset: formatHours(response.data.sys.sunset * 1000),
      visibility: response.data.visibility / 1000,
      pressure: response.data.main.pressure,
    });
  }

  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "468138c56dce4362024186bb0e3443ca";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container-header">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="🔍Search location ..."
                autocomplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-danger w-100"
              />
            </div>
            <div className="col-1">
              <span className="current-location">
                <button type="button" className="btn btn-light w-600">
                  <span />
                  🎯
                </button>
              </span>
            </div>
          </div>
        </form>
        <ForecastToday data={weatherData} />
        <UpcomingForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
