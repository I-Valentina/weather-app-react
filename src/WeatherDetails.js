import React from "react";

export default function WeatherDetails() {
  let weatherData = {
    sunrise: "06:26",
    sunset: "20:38",
    wind: 10,
    humidity: 61,
    visibility: "12,9",
    pressure: 1013,
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ul className="details">
            <li>
              Sunset <span className="textdeco">{weatherData.sunset}</span>
            </li>
            <li>
              Humidity <span className="textdeco">{weatherData.humidity}%</span>{" "}
            </li>
            <li>
              Pressure{" "}
              <span className="textdeco">{weatherData.pressure}hPA</span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="details">
            <li>
              Sunrise <span className="textdeco">{weatherData.sunrise}</span>
            </li>
            <li>
              Wind <span className="textdeco">{weatherData.wind}km/h</span>{" "}
            </li>
            <li>
              Visibility{" "}
              <span className="textdeco">{weatherData.visibility}km</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
