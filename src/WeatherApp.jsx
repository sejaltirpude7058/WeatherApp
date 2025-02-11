import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
      city: "Nagpur",
      temperature: 28.05,
      tempMin: 25.06,
      tempMax: 28.05,
      humidity: 47,
      feelsLike: 31,
      weather: "Mist",
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo)
        console.log(newInfo);
    }

return(
    <div className="WeatherApp" >
        <h1>Weather App</h1>
        <SearchBox updateWeatherInfo={updateWeatherInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
)
}

export default WeatherApp;













