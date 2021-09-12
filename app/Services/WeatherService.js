import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"

const weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class WeatherService {

    constructor() {

    }

    async getWeather() {
        let res = await weatherApi.get('weather')
        ProxyState.weather = new Weather(res.data)
        console.log("this weather", ProxyState.weather)
    }



}

export const weatherService = new WeatherService