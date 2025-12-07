import { Component } from "react";
import DisplayWeather from "./displayweather";
import NoWeather from "./noweather";

export default class Mainweather extends Component {
    state = {
        weather: {}
    }

    async componentDidMount() {
        try {
            const response = await fetch('weather.json');
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`)
            }
            const weather = await response.json();
            this.setState({
                weather
            })

        } catch (error) {
            console.log(error)
        }
    }
    render() {
        let yesNoWeather = Object.keys(this.state.weather).length > 0 ?
            <DisplayWeather weather={this.state.weather} /> : <NoWeather />
        return (
            <>
                {yesNoWeather}
            </>
        )

    }
}