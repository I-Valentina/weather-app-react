import React from "react";

export default function ForecastToday(props) {
  return (
    <div className="ForecastToday">
      <div className="container-header">
        <h1>{props.city}</h1>
        <ul>
          <li className="descriptiondate">
            <span>{props.date}</span>
          </li>
          <li className="descriptiondate">
            <em>{props.description}</em>
          </li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="today weather-forecast">
              <img
                src={props.imgUrl}
                alt={props.description}
                className="float-left"
              />
              <div className="float-left">
                <strong id="temperature">{props.temperature}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <ul className="details">
              <li>
                Sunset <span className="textdeco">{props.sunset}</span>
              </li>
              <li>
                Humidity <span className="textdeco">{props.humidity}%</span>{" "}
              </li>
              <li>
                Pressure <span className="textdeco">{props.pressure}hPA</span>{" "}
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="details">
              <li>
                Sunrise <span className="textdeco">{props.sunrise}</span>
              </li>
              <li>
                Wind <span className="textdeco">{props.wind}km/h</span>{" "}
              </li>
              <li>
                Visibility{" "}
                <span className="textdeco">{props.visibility}km</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
