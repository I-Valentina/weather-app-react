import React from "react";

export default function ForecastToday() {
  let weatherData = {
    temperature: 19,
    imgUrl: "https://openweathermap.org/img/wn/04d@2x.png",
  };

  return (
    <div className="ForecastToday">
      <div className="row">
        <div className="col-6">
          <div className="today weather-forecast">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature">{weatherData.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
