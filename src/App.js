import React from "react";
import Search from "./Search.js";
import ForecastToday from "./ForecastToday";
import ForecastHeader from "./ForecastHeader";
import ForecastDetails from "./ForecastDetails";
import UpcomingForecast from "./UpcomingForecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-header">
          <Search />
          <ForecastHeader />
          <ForecastToday />
          <ForecastDetails />
          <UpcomingForecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
