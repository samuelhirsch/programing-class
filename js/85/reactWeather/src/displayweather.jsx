import { Component } from "react";
import './displayweather.css'

export default function DisplayWeather(props) {
    const { Temperature, Humidity, Wind, conditions, img } = props.weather;
    console.log(Temperature, Humidity, Wind)
    return (
        <>
            <div id="displayweather-div">
                <ul id="weather-ul">
                    <li><span className="weather-type">Temperature:</span>{Temperature}&deg;</li>
                    <li><span className="weather-type">Humidity:</span>{Humidity}</li>
                    <li><span className="weather-type">Wind:</span>{Wind}</li>
                </ul>
              <span id="conditions"><img src={img} alt="weathericon" /> {conditions} </span>
            </div>
        </>
    )
}