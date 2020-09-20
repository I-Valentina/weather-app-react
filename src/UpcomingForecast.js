import React, { useState } from "react";
import axios from "axios";
import ForecastOnDay from "./ForecastOnDay";

import "./UpcomingForecast.css";

export default function UpcomingForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="UpcomingForecast">
        <div className="row">
          <ForecastOnDay data={forecast.list[0]} />
          <ForecastOnDay data={forecast.list[1]} />
          <ForecastOnDay data={forecast.list[2]} />
          <ForecastOnDay data={forecast.list[3]} />
          <ForecastOnDay data={forecast.list[4]} />
          <ForecastOnDay data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "468138c56dce4362024186bb0e3443ca";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

    return null;
  }
  //   <div className="UpcomingForecast">
  //   <div row>
  //   <div col-2>
  //   <h3>Monday</h3>
  //       <img
  //       src="https://openweathermap.org/img/wn/04d@2x.png"
  //     alt="Mostly cloudy"
  //         />
  //       <p>
  //       <strong>27° </strong> 25°
  //   </p>
  //       </div>
  //   </div>
  //   </div>
}
