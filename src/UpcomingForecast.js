import React from "react";

import "./UpcomingForecast.css";

export default function UpcomingForecast() {
  return (
    <div className="UpcomingForecast">
      <div row>
        <div col-2>
          <h3>Monday</h3>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="Mostly cloudy"
          />
          <p>
            <strong>27° </strong> 25°
          </p>
        </div>
      </div>
    </div>
  );
}
