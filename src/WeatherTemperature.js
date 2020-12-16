import React, { useState } from "react";


export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsium")
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsium(event){
        event.preventDefault();
        setUnit("celsium");
    }

    function fahrenheit(){
        return (props.celsium * 9)/5 +32;
    }
    if (unit === "celsium") {
    return(
        <span className="WeatherTemperature" >
            <span className="temperature"> {Math.round(props.celsium)}</span>
            <span className="celsium"> ℃ |
            <a href="/" onClick={showFahrenheit}>℉</a> 
            </span>
        </span>
    )
    }else {
        return (<span className="WeatherTemperature" >
            <span className="temperature"> {Math.round(fahrenheit())}</span>
            <span className="celsium"> 
            <a href="/" onClick={showCelsium}>℃</a> |℉
            </span>
        </span>)
    }
}