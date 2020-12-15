import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState ({ ready: false });

    function handleResponse(response){
        setWeatherData({
            ready:true,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            date:"Tuesday 16:01",
            icon:"/",
        });
    }

    if (weatherData.ready){
    return (<div className="weather">
        <form>
          <div className="row"> 
           <div className="col-9">
                <input type="search" placeholder="Enter city..."
                className="form-control"
                autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
          </div>  
        </form>
    <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <img src={weatherData.icon}/>
                <span className="temperature"> {Math.round(weatherData.temperature)}</span>
                <span className="celsium">℃</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h </li>
                </ul>
            </div>
        </div>
       </div>)
    }
     else { 
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=114cd41965401542304c61b473a9b798&units=metric`
        axios.get(apiUrl).then(handleResponse)
        return "Loading...";
    } 
}