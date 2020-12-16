import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";




export default function Weather(props){
    const [city, setCity] = useState (props.defaultCity)
    const [weatherData, setWeatherData] = useState ({ ready: false });

    function handleResponse(response){
        setWeatherData({
            ready:true,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            date:new Date (response.data.dt * 1000),
            icon:"/",
        });
    }

    function search(){
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=114cd41965401542304c61b473a9b798&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function changeCity(event){
        setCity(event.target.value);
    }
    if (weatherData.ready){
    return (<div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row"> 
           <div className="col-9">
                <input type="search" placeholder="Enter city..."
                className="form-control"
                autoFocus="on"
                onChange={changeCity}/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
          </div>  
        </form>
         <WeatherInfo data={weatherData}/>
  
       </div>)
    }
     else { 
         search();
        return "Loading...";
    } 
}