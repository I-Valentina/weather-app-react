import React from "react";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Forecast defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}
