import React from "react";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props){
    return (
    <div className="WetherInfo">
          <h1>{props.data.city}</h1>
        <ul>
            <li>
            <Time date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <WeatherIcon code={props.data.icon}/>
                <span className="temperature"> {Math.round(props.data.temperature)}</span>
                <span className="celsium">℃</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h </li>
                </ul>
            </div>
        </div>
    </div>)
}