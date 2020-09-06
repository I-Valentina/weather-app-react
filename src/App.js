import React from "react";
import Search from "./Search.js";
import ForecastToday from "./ForecastToday";
import ForecastOverview from "./ForecastOverview";
import WeatherDetails from "./WeatherDetails";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-frame">
        <div className="container-header">
          <Search />
          <ForecastOverview />
          <ForecastToday />
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
}
