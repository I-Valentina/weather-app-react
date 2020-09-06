import React from "react";
import Search from "./Search.js";
import ForecastToday from "./ForecastToday";
import ForecastOverview from "./ForecastOverview";
import WeatherDetails from "./WeatherDetails";
import Footer from "./Footer";

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
          <Footer />
        </div>
      </div>
    </div>
  );
}
