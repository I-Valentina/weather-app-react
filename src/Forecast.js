import React, { useState } from "react";
import ForecastToday from "./ForecastToday";
import UpcomingForecast from "./UpcomingForecast";

import axios from "axios";

export default function Forecast() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Sunday, 13:02",
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: "06:26",
      sunset: "20:38",
      visibility: "12,9",
      pressure: 1013,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "09a3d60d8ac6023275868ef01928c3a7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Forecast">
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
