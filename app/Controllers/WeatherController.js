import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {

    document.getElementById('weatherzone').innerHTML = ProxyState.weather.Template
}

function _tempConvert(temp) {

    let newtemp = Math.floor(((temp - 273.15) * 1.8) + 32)
    ProxyState.weather.temp = newtemp
    ProxyState.weather = ProxyState.weather




}

export class WeatherController {

    constructor() {
        this.getWeather()
        ProxyState.on('weather', _drawWeather)
        _tempConvert()
    }


    async getWeather() {

        await weatherService.getWeather()

        let temp = ProxyState.weather.temp
        _tempConvert(temp)
    }

    tempConvert() {

        if (ProxyState.weather.type == false) {
            ProxyState.weather.type = true
            ProxyState.weather = ProxyState.weather

            let far = ProxyState.weather.temp
            let cel = Math.round(((far - 32) * 5) / 9)

            ProxyState.weather.temp = cel
            ProxyState.weather = ProxyState.weather


        } else if (ProxyState.weather.type == true) {
            ProxyState.weather.type = false
            ProxyState.weather = ProxyState.weather

            let cel = ProxyState.weather.temp
            let far = Math.round((cel * 1.8) + 32)

            ProxyState.weather.temp = far
            ProxyState.weather = ProxyState.weather
        }

    }

}