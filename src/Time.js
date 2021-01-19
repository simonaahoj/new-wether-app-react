import React from 'react';

export default function Time(props){
  
    let days =["Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday",
    "Friday", 
    "Saturday"];

    let currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + props.timezone - 3600)
 
    let day = days[currentTime.getDay()];

    let hours = currentTime.getHours();
    if (hours < 10){
        hours =`0${hours}`;
    }

    let minutes = currentTime.getMinutes();
    if (minutes < 10){
        minutes =`0${minutes}`;
    }

return( <div> {day} {hours}:{minutes}</div>)
}