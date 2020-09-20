import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function ForecastOnDay(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="col">
      {hours()}
      <ForecastIcon code={props.data.weather[0].icon} />
      <strong>{temperature()}</strong>
    </div>
  );
}
