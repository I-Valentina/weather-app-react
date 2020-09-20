import React from "react";
import ForecastIcon from "./ForecastIcon";
import FormatDate from "./FormatDate";

export default function ForecastToday(props) {
  return (
    <div className="ForecastToday">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="descriptiondate">
          <span>
            <FormatDate date={props.data.date} />
          </span>
        </li>
        <li className="descriptiondate">
          <em>{props.data.description}</em>
        </li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="today weather-forecast">
            <div className="float-left">
              <ForecastIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <strong id="temperature">{props.data.temperature}</strong>
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
              Sunrise <span className="textdeco">{props.data.sunrise}</span>
            </li>
            <li>
              Wind <span className="textdeco">{props.data.wind}km/h</span>{" "}
            </li>
            <li>
              Visibility{" "}
              <span className="textdeco">{props.data.visibility}km</span>{" "}
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="details">
            <li>
              Sunset <span className="textdeco">{props.data.sunset}</span>
            </li>
            <li>
              Humidity <span className="textdeco">{props.data.humidity}%</span>{" "}
            </li>
            <li>
              Pressure{" "}
              <span className="textdeco">{props.data.pressure}hPA</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
