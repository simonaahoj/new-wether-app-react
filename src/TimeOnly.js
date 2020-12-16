import React from 'react';

export default function TimeOnly(props){
    
    let timeInOriginalTimeZone = new Date(props.time * 1000);
    timeInOriginalTimeZone.setSeconds(timeInOriginalTimeZone.getSeconds() + props.timezone - 3600)


    let hours = timeInOriginalTimeZone.getHours();
    if (hours < 10){
        hours =`0${hours}`;
    }

    let minutes = timeInOriginalTimeZone.getMinutes();
    if (minutes < 10){
        minutes =`0${minutes}`;
    }

    return( <span>{hours}:{minutes}</span>)
}