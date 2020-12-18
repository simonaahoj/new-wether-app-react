import React from "react";
import Time from "./Time";
import TimeOnly from "./TimeOnly";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"
import { WiSunrise, WiSunset, WiRaindrop, WiStrongWind, WiDaySunny } from "weather-icons-react";

export default function WeatherInfo(props){
    return (
    <div className="WetherInfo">
          <h1>{props.data.city}, {props.data.country}</h1>
        <ul>
            <li>
            <Time timezone={props.data.timezone}/>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <WeatherIcon code={props.data.icon}/>
                <WeatherTemperature celsium={props.data.temperature}/>
            </div>
            <div className="col-6">
                <ul>
                    <li title="Humidity"><WiRaindrop size={24} color='#000' /> {props.data.humidity}%</li>
                    <li title="Wind"><WiStrongWind size={24} color='#000' /> {props.data.wind} km/h </li>
                    <li title="Sunrise"><WiSunrise size={24} color='#000' /> <TimeOnly timezone={props.data.timezone} time={props.data.sunrise}  /> am</li>
                    <li title="Sunset"><WiSunset size={24} color='#000' /> <TimeOnly timezone={props.data.timezone} time={props.data.sunset} /> pm</li>
                    <li title="Sun yLight"><WiDaySunny size={24} color='#000' /> {Math.floor((props.data.sunset-props.data.sunrise)/(60*60))}h {Math.floor(((props.data.sunset-props.data.sunrise)/60))%60}min</li>
                </ul>
            </div>
        </div>
    </div>)
}