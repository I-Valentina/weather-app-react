import React from "react";

export default function ForecastOverview() {
  let weatherData = {
    city: "Cluj-Napoca",
    date: "Sunday, 13:02",
    description: "Mostly cloudy",
  };

  return (
    <div className="forecast-overview">
      <h1>{weatherData.city}</h1>
      <ul>
        <li className="descriptiondate">
          <span>{weatherData.date}</span>
        </li>
        <li className="descriptiondate">
          <em>{weatherData.description}</em>
        </li>
      </ul>
    </div>
  );
}
