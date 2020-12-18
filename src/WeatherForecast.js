import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPriview from "./WeatherForecastPriview";



export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null)

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name){
        return( 
        <div className="forecast row">
            {forecast.list.slice(0, 6).map(function(forecastItem, index){
                return  <WeatherForecastPriview key={index} data={forecastItem} />
            })}
        </div>
        ) 
    } else {
    let apiKey = "114cd41965401542304c61b473a9b798"
    let apiUrlForcase = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrlForcase).then(handleForecastResponse)
    return null
    }
   
}
