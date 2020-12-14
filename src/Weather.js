import React from "react";
import "./Weather.css";


export default function Weather(){
    return (<div className="weather">
        <form>
          <div className="row"> 
           <div className="col-9">
                <input type="search" placeholder="Enter city..."
                className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
            </div>
          </div>  
        </form>
        <h1>Prague</h1>
        <ul>
            <li>Tuesday 16:01</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="kdkdk"/>
                6℃
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