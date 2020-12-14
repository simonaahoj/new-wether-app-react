import React from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(){
    //let apiUrl=`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=114cd41965401542304c61b473a9b798&units=metric`
    //let city = "Prague"
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
        <h1>Prague</h1>
        <ul>
            <li>Tuesday 16:01</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row" mt-5>
            <div className="col-6">
                <img src="kdkdk"/>
                <span className="temperature">6</span>
                <span className="celsium">℃</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humity: 77%</li>
                    <li>Wind: 13 km/h </li>
                </ul>
            </div>
        </div>

        </div>)
}