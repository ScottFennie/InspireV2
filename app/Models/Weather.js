export class Weather {

    constructor(weatherData) {
        this.icon = weatherData.weather.icon
        this.base = weatherData.base
        this.temp = weatherData.main.temp
        this.type = weatherData.type || false
        this.name = weatherData.name
        this.main = weatherData.weather.main

    }

    get Template() {

        return /*html*/ `
        <h2 class="pt-3 selectable">${this.temp}${this.type == false ? "°F" : "°C"}</h2>
        <h6 class="pt-0">${this.name}</h6>
        `
    }
}